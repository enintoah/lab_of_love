import React from "react";
import NavCont from "../nav/nav_container"
import { Link } from "react-router-dom";

class Show extends React.Component{
  
    render(){
        const currentUser = this.props.currentUser;
        return(
            <div className="show-page-contents">
                <NavCont />
                <div className="page-container">
                    <div className="color-behind"></div>
                    <div className="color-behind2"></div>
                            <div className="top-of-show">
                                <h2 className="top-show-page-info">Name: <h2 className="inner-h2">{this.props.currentUserProfile.name}</h2></h2>
                                <h2 className="top-show-page-info">Gender: <h2 className="inner-h2">{this.props.currentUserProfile.gender}</h2></h2>
                            </div>
                        <div className="inner-page">
                            <img className="show-page-image" src={this.props.currentUserProfile.imageUrl}/>
                            <div className="page-info-under-image">
                                <h1 className="show-page-title">{this.props.currentUserProfile.name}'s information:</h1>
                                <h2 className="show-page-info">Pronouns: <h2 className="inner-h2">{this.props.currentUserProfile.pronouns}</h2></h2>
                                <h2 className="show-page-info">Age: <h2 className="inner-h2">{this.props.currentUserProfile.age}</h2></h2>
                                <h2 className="show-page-info">Location: <h2 className="inner-h2">{this.props.currentUserProfile.location}</h2></h2>
                                <h2 className="show-page-info">Description: <h2 className="inner-h2">{this.props.currentUserProfile.description}</h2></h2>
                                <h2 className="show-page-info">Happiness level: <h2 className="inner-h2">{this.props.currentUserProfile.happinessLevel}</h2></h2>
                                <h2 className="show-page-info">Commitment level: <h2 className="inner-h2">{this.props.currentUserProfile.commitmentLevel}</h2></h2>
                                <h2 className="show-page-info">Love Language: <h2 className="inner-h2">{this.props.currentUserProfile.loveLanguage}</h2></h2>
                                <div className="personality-traits">
                                    <h2 className="show-page-info">Personality traits:</h2>
                                    <ul>
                                        {this.props.currentUserProfile.personality.map(trait => {
                                            return(
                                                <div>
                                                    <h1 className="listing-show">- {trait}</h1>
                                                </div>
                                            )
                                        }
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="show-buttons">
                            <button className="button-style">Edit</button>
                            {/* Will link to edit and delete functions */}
                            <button className="button-style delete-button" onClick={() => alert("You cannot delete the demo user profile.")}>Delete</button>
                        </div>
                </div>
            </div>
        )
    }
}

export default Show;