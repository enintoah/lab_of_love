import React from "react";
import { io } from "socket.io-client";
import * as MessageUtil from './../../util/message_util'
import Message from "./message";

// const ENDPOINT = "http://localhost:5050";
const ENDPOINT = "https://laboflove.herokuapp.com";

class ChatBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      body: ""
    }

    this.socket = io(ENDPOINT)
    this.socket.emit('setup', this.props.currentUser)
    this.socket.emit('join chat', this.props.matchId)
    this.socket.on('receive message', (message) => {
      this.props.receiveMessage(message);
    })
    this.socket.on('remove message', (id) => {
      this.props.destroyMessage(id)
    })

    this.receiveEdited = this.receiveEdited.bind(this)
    this.removeMessage = this.removeMessage.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    this.updateState = this.updateState.bind(this)
  }

  componentDidMount() {
    const users = { user1: this.props.currentUser.id, user2: this.props.matchId};
    this.props.fetchMessages(users);
  }

  componentWillUnmount() {
    this.props.clearMessages()
    this.socket.disconnect()
  }

  updateState(e) {
    e.preventDefault()
    this.setState({body: e.target.value})
  }

  removeMessage(id) {
    MessageUtil.deleteMessage(id)
      .then(res => {
        console.log(res.data._id)
        console.log(this.props)
        this.props.destroyMessage(res.data._id);
        this.socket.emit('delete message', res.data);
      })
  }

  sendMessage(e) {
    e.preventDefault()
    const message = {
      message: this.state.body,
      sender: this.props.currentUser.id,
      recipient: this.props.matchId
    }
    MessageUtil.createMessage(message)
      .then(res => {
        this.socket.emit('new message', res.data);
        this.props.receiveMessage(res.data);
      })
      .catch(err => console.log(err))
    

    this.setState({body: ""})
  }

  receiveEdited(id, state) {
    const message = {message: state.body}
    MessageUtil.updateMessage(id, message)
      .then(mes => {
        this.props.receiveMessage(mes.data)
        this.socket.emit('new message', mes.data)
      })
      .catch(err => console.log(err))
  }

  render() {
    if (this.props.userProfiles === undefined || this.props.matchId === undefined) {
      return null
    } else {
      const messages = Object.values(this.props.messages).reverse()
      return (
        <div className="chatbox-all">
          <div className="chatbox-messages">
            {messages.map(el => {
              return (<Message receiveEdited={this.receiveEdited} editMessage={this.props.editMessage} removeMessage={this.removeMessage} message={el} currentUser={this.props.currentUser} />)
            })}
          </div>
          <div className="chatbox-textarea">
            <textarea cols="30" rows="10" onChange={this.updateState} placeholder="Say Something" value={this.state.body}></textarea>
            <button onClick={this.sendMessage}>Send</button>
          </div>
        </div>
      )
    }
  }
}

export default ChatBox