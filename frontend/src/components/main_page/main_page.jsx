import React from "react";
import NavBar from "../nav/nav_container";
import Card from "./card";
import { workaroundNewUser } from "../../util/session_api_util";


class MainPage extends React.Component{

  constructor(props) {
    super(props)

    this.redirectToMessaging = this.redirectToMessaging.bind(this)
  }

  async componentDidMount() {
    await this.props.getMatches(this.props.currentUser.id).then(() => this.checkForNewUserMatches())
    await this.props.getCurrentUserProfile(this.props.currentUser.id).catch(() => this.checkForNewUserProfile())
  }

  checkForNewUserProfile() {
    if (Object.keys(this.props.currentUserProfile).length === 0) {
      this.props.history.push(`/users/${this.props.currentUser.id}/createProfile`)
    }
  }

  checkForNewUserMatches() {
    if (Object.keys(this.props.matches).length === 0) {
      workaroundNewUser(this.props.currentUser.id).then(() => this.props.getMatches(this.props.currentUser.id))
    }
  }

  async redirectToMessaging(e) {
    e.preventDefault()
    const id = e.target.getAttribute('value')
    const users = { user1: this.props.currentUser.id, user2: id};
    await this.props.fetchMessages(users);
    this.props.history.push(`/messaging/${id}`)
  }

    render() {
      if (!this.props.matches) {
        return null
      } else {
    
        const matches = Object.values(this.props.matches)
        console.log('what is matches',matches)
        return (
             <div>
                <div className="nav-bar">
                     <NavBar/>
                 </div>
                 <div className="mph1">
                  <h1>This week's experiments:</h1>
                  </div>
                 <div className="cards-container">
                  {
                    matches.map(el => {
                      return (<Card redirectToMessaging={this.redirectToMessaging} match={el} key={el.id}/>)
                    })
                  }
                 </div>
            <footer>
              Copyright &copy; 2022 Lab
            </footer>
          </div>
        );
      }
    }
}


export default MainPage;