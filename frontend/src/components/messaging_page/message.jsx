import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      body: this.props.message.message
    }

    this.checkOwner = this.checkOwner.bind(this)
    this.checkOwnerButtons = this.checkOwnerButtons.bind(this)
    this.deleteMessage = this.deleteMessage.bind(this)
  }

  deleteMessage(e) { 
    e.preventDefault()
    const id = e.target.getAttribute('value');
    this.props.removeMessage(id);
  }

  checkOwnerButtons() {
    if (this.props.message.sender === this.props.currentUser.id) {
      return (
        <div>
          <button>Edit</button>
          <button onClick={this.deleteMessage} value={this.props.message._id}>Delete</button>
        </div>
      )
    }
  }
  
  checkOwner() {
    if (this.props.message.sender === this.props.currentUser.id) {
      return "currentUser"
    }
  }

  render() {
    return (
      <div className={this.checkOwner()}>
        <h2>{this.props.message.message}</h2>
        {this.checkOwnerButtons()}
      </div>
    )
  }
}

export default Message