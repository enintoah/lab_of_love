import React from "react";
import NavBar from "../nav/nav_container";
import Card from "./card";
import { Link } from "react-router-dom";

class MainPage extends React.Component{

  constructor(props) {
    super(props)

    this.redirectToMessaging = this.redirectToMessaging.bind(this)
  }

  componentDidMount() {
    this.props.getCurrentUserProfile(this.props.currentUser.id)
    this.props.getMatches(this.props.currentUser.id)
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