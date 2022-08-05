import React from "react"
import ChatBoxContainer from "./chat_box_container";
import MatchShowPage from './match_show_page'
import NavContainer from './../nav/nav_container'

class MessagingPage extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.getMatches(this.props.currentUser.id)
  }


  render() {
    if (this.props.userProfiles === {} || !this.props.match.params.match_id) {
      return null
    } else {
      console.log(this.props.match.params.match_id)
      console.log(this.props.userProfiles)
      return (
        <div>
          <div className='messages-nav'>
            <NavContainer/>
          </div>
          <div className="message-container">
            <div className='match-card'>
              <MatchShowPage matchProfile={this.props.userProfiles[this.props.match.params.match_id]} /> 
            </div>
            <div className="chat-box-container">
              <ChatBoxContainer matchId={this.props.match.params.match_id}/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default MessagingPage