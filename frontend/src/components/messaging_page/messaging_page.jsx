import React from "react"
import ChatBoxContainer from "./chat_box_container";

const ENDPOINT = "http://localhost:5050";
var socket, selectedChatCompare; 


class MessagingPage extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <h1>HELLO WORLD</h1>
        <div>

        </div>
        <div>
          <ChatBoxContainer matchId={this.props.match.params.match_id}/>
        </div>
      </div>
    )
  }
}

export default MessagingPage