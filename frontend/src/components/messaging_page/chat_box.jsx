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
    this.socket.on('hello', (message) => {
      console.log(message)
    })

    this.sendMessage = this.sendMessage.bind(this)
    this.updateState = this.updateState.bind(this)
    this.matchName = this.props.userProfiles[this.props.matchId].name
  }

  componentDidMount() {
    // this.socket.emit('setup', this.props.currentUser)
    // this.socket.emit('join chat', this.props.matchId)
    // this.socket.on('hello', (message) => {
    //   console.log(message)
    // })
  }
  

  componentWillUnmount() {
    this.props.clearMessages()
    // unjoin a socket room
    // this.socket.emit('disconnect')
  }

  updateState(e) {
    e.preventDefault()
    this.setState({body: e.target.value})
  }

  sendMessage(e) {
    e.preventDefault()
    const message = {
      message: this.state.body,
      sender: this.props.currentUser.id,
      recipient: this.props.matchId
    }
    MessageUtil.createMessage(message)
      .then(res => {this.socket.emit('new message', res.data)})
      .catch(err => console.log(err))
    

    this.setState({body: ""})
  }

  render() {
    if (!this.props.messages) {
      return null
    } else {
      const messages = Object.values(this.props.messages)
      return (
        <div>
          <h2>Hello world, im dad</h2>
          {messages.map(el => {
            return (<Message message={el} />)
          })}
  
          <textarea name="" id="" cols="30" rows="10" onChange={this.updateState} placeholder={`message ${this.matchName}`} value={this.state.body}></textarea>
          <button onClick={this.sendMessage}>Send</button>
        </div>
      )
    }
  }
}

export default ChatBox