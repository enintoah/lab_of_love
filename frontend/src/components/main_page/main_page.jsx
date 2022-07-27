import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../nav/nav_container";
import Card from "./card";

class MainPage extends React.Component{

  constructor(props) {
    super(props)

    this.redirectToMessaging = this.redirectToMessaging.bind(this)
  }

  componentDidMount() {
    this.props.getCurrentUserProfile(this.props.currentUser.id)
    this.props.getMatches(this.props.currentUser.id)
  }

  redirectToMessaging(e) {
    e.preventDefault()
    // this.props.history.push(`/messaging/${e.currentTarget.value}`)
    const id = e.target.getAttribute('value')
    this.props.history.push(`/messaging/${id}`)
  }

    render() {
      if (!this.props.matches) {
        return null
      } else {
        const matches = Object.values(this.props.matches)
        return (
          <div>
            <h1>Love of Lab</h1>
                  <div>
                     <NavBar/>
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