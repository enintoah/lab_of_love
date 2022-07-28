import React from "react"
import ChatBoxContainer from "./chat_box_container";
import MatchShowPage from './match_show_page'

class MessagingPage extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <div>
          <MatchShowPage matchProfile={this.props.userProfiles[this.props.match.params.match_id]} /> 
        </div>
        <div>
          <ChatBoxContainer matchId={this.props.match.params.match_id}/>
        </div>
      </div>
    )
  }
}

export default MessagingPage