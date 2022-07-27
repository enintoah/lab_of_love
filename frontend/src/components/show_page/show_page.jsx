import React from "react";

class Show extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
    
        return(
            <div className="show-page-contents">
                <div className="page-container">
                    <div className="inner-page">
                        <div className="top-of-show">
                            <h2 className="show-page-info">Name: {this.props.currentUserProfile.name}</h2>
                            <h2 className="show-page-info">Gender: {this.props.currentUserProfile.gender}</h2>
                        </div>
                        <img className="show-page-image" src={this.props.currentUserProfile.imageUrl}/>
                        <h2 className="show-page-info">Pronouns: {this.props.currentUserProfile.pronouns}</h2>
                        <h2 className="show-page-info">Age: {this.props.currentUserProfile.age}</h2>
                        <h2 className="show-page-info">Location: {this.props.currentUserProfile.location}</h2>
                        <h2 className="show-page-info">Description: {this.props.currentUserProfile.description}</h2>
                        <h2 className="show-page-info">Happiness level: {this.props.currentUserProfile.happinessLevel}</h2>
                        <h2 className="show-page-info">Love Language: {this.props.currentUserProfile.loveLanguage}</h2>
                        <div className="personality-traits">
                            <h2 className="show-page-info">Personality traits:</h2>
                            <ul>
                                {this.props.currentUserProfile.personality.map(trait => {
                                    return(
                                        <div>
                                            <h1>-{trait}</h1>
                                        </div>
                                    )
                                }
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="show-buttons">
                        <button className="button-style">Edit</button>
                        <button className="button-style delete-button">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Show;