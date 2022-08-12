import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      body: this.props.message.message
    }

    this.sendEdited = this.sendEdited.bind(this)
    this.beginEdit = this.beginEdit.bind(this)
    this.checkOwner = this.checkOwner.bind(this)
    this.checkOwnerButtons = this.checkOwnerButtons.bind(this)
    this.deleteMessage = this.deleteMessage.bind(this)
    this.updateState = this.updateState.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({body: this.props.message.message})
    }
  }

  deleteMessage(e) { 
    e.preventDefault()
    const id = e.target.getAttribute('value');
    this.props.removeMessage(id);
  }

  beginEdit(e) {
    e.preventDefault();
    console.log(this.props.message);
    this.props.editMessage(this.props.message);
  }

  checkOwnerButtons() {
    if (this.props.message.sender === this.props.currentUser.id) {
      return (
        <div className="currentUser-message-buttons" >
          <button onClick={this.beginEdit}>Edit</button>
          <button onClick={this.deleteMessage} value={this.props.message._id}>Delete</button>
        </div>
      )
    }
  }
  
  checkOwner() {
    if (this.props.message.sender === this.props.currentUser.id) {
      return "currentUser"
    } else {
      return "received-message"
    }
  }

  sendEdited(e) {
    e.preventDefault()
    this.props.receiveEdited(this.props.message._id, this.state)
  }

  updateState(e) {
    e.preventDefault()
    this.setState({body: e.target.value})
  }

  render() {
    if (!this.props.message.type) {
      return (
        <div className={this.checkOwner()} id='current-message'>
          <div className='side'>{this.checkOwnerButtons()}</div>
          <h2>{this.props.message.message}</h2>
        </div>
      )
    } else {
      return (
        <div className="edit-messages-textarea">
          <div className="edit-textarea-div">
            <textarea value={this.state.body} onChange={this.updateState} cols="30" rows="10"></textarea>
          </div>
          <button onClick={this.sendEdited}>Update</button>
        </div>
      )
    }
  }
}

export default Message