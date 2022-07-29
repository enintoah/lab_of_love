import React from "react";
import { io } from "socket.io-client";
import * as MessageUtil from './../../util/message_util'
import Message from "./message";

const ENDPOINT = "http://localhost:5050";


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

    this.removeMessage = this.removeMessage.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    this.updateState = this.updateState.bind(this)
    this.matchName = this.props.userProfiles[this.props.matchId].name
  }

  componentWillUnmount() {
    this.props.clearMessages()
    this.socket.emit('disconnect')
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

  render() {
    if (!this.props.messages) {
      return null
    } else {
      const messages = Object.values(this.props.messages).reverse()
      return (
        <div className="chatbox-all">
          <div className="chatbox-messages">
            {messages.map(el => {
              return (<Message removeMessage={this.removeMessage} message={el} currentUser={this.props.currentUser} />)
            })}
          </div>
          <div className="chatbox-textarea">
            <textarea cols="30" rows="10" onChange={this.updateState} placeholder={`message ${this.matchName}`} value={this.state.body}></textarea>
            <button onClick={this.sendMessage}>Send</button>
          </div>
        </div>
      )
    }
  }
}

export default ChatBox