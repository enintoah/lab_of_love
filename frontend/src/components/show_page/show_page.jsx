import React from "react";
import NavCont from "../nav/nav_container"
import { Link } from "react-router-dom";
import { deleteUserProfile } from "../../util/user_profile_util";
import { deleteUser } from "../../util/session_api_util";
import { deleteManyMessages } from '../../util/message_util'


class Show extends React.Component{
    constructor(props) {
        super(props)
        
        this.deleteUser = this.deleteUser.bind(this)
        this.demoUsers = ["62e037b54780df32d1a7991e", "62e037d34780df32d1a79921", "62e037e94780df32d1a79924", "62e037fd4780df32d1a79927", "62e038204780df32d1a7992a", "62e038894780df32d1a7992d", "62f2ec5fa73c7fb7b92f2623", "62f2eddbf15631836f6b5b46", "62f2ee17f15631836f6b5b50", "62f2ee37f15631836f6b5b5a", "62f2ee56f15631836f6b5b60"]
    }
  
    componentDidMount() {
        this.props.getCurrentUserProfile(this.props.currentUser.id)
    }

    async deleteUser(e) {
        e.preventDefault()
        if (this.demoUsers.includes(this.props.currentUser.id)) {
            alert("You cannot delete Demo Users")
        } else {
            await deleteUser(this.props.currentUser.id)
            await deleteUserProfile(this.props.currentUser.id)
            await deleteManyMessages(this.props.currentUser.id)
            this.props.logout()
        }
    }

    render(){
        if (Object.keys(this.props.currentUserProfile).length === 0) {
            return null
        } else {
            const currentUser = this.props.currentUser;
            return(
                <div className="page">
                    <div className="show-nav">    
                        <NavCont />
                    </div>    
                    <div className="show-p">
                    <div className="show-page-contents">
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
                                    <Link to={`/users/${currentUser.user_id}/edit`}>
                                        <button className="button-style">Edit</button>
                                    </Link>
                                    <button className="button-style delete-button" onClick={this.deleteUser}>Delete</button>
                                </div>
                        </div>
    
                            </div>
                    </div>
            </div>
            )
        }
    }
}

export default Show;