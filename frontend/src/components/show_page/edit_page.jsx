import React from "react";
import { withRouter } from 'react-router-dom'
import NavBar from '../nav/nav_container.js'


class Edit extends React.Component{
 constructor(props){
    super(props);
      this.handleSubmit = this.handleSubmit.bind(this)
 }

 async componentDidMount() {
    await this.props.getCurrentUserProfile(this.props.currentUser.id);
    this.setState({
        imageUrl: this.props.currentUserProfile.imageUrl,
        name:this.props.currentUserProfile.name,
        description:this.props.currentUserProfile.description,
        interests1:this.props.currentUserProfile.interests[0],
        interests2:this.props.currentUserProfile.interests[1],
        interests3:this.props.currentUserProfile.interests[2],
        gender:this.props.currentUserProfile.gender,
        personality1:this.props.currentUserProfile.personality[0],
        personality2:this.props.currentUserProfile.personality[1],
        personality3:this.props.currentUserProfile.personality[2],
        loveLanguage:this.props.currentUserProfile.loveLanguage,
        happinessLevel:this.props.currentUserProfile.happinessLevel,
        commitmentLevel:this.props.currentUserProfile.commitmentLevel,
        age:this.props.currentUserProfile.age,
        location:this.props.currentUserProfile.location,
        user_id:this.props.currentUserProfile.user_id,
        pronouns:this.props.currentUserProfile.pronouns,
  })
 }

    handleSubmit(e){
        e.preventDefault()
        let newState = Object.assign({},this.state)
        console.log(newState)
        this.props.editUserProfile(newState).then(() => {
            this.props.history.push(`/users/${this.props.currentUserProfile.user_id}`)
        })
    }

    update(property){
        return e => this.setState({[property]:e.currentTarget.value})
    }

    
    render(){
        if (this.state === null) {
            return null
        } else {
            return(
                <div>
                    <div className="edit-navbar">
                        <NavBar/>
                    </div>
                    <div className="edit-page">
                        <div className="editp-name">
                            <h1>{this.props.currentUserProfile.name}</h1>
                        </div>
                        <br />
                        <div className="edit-form">
                            <form onSubmit={this.handleSubmit}>
                            <br /><br />
                                <label className="description">Description: <br /><br />
                                    <textarea cols="30"
                                    rows="10"
                                    value={this.state.description}
                                    onChange={this.update("description")}
                                    />
                                </label><br /><br />
    
                                <label className="passions">Passions:<br /><br />
                                    <div className="passion-inputs">
                                        <input 
                                        type="text"
                                        value={this.state.interests1}
                                        onChange={this.update("interests1")}/>
    
                                        <input 
                                        type="text"
                                        value={this.state.interests2}
                                        onChange={this.update("interests2")}/>
    
                                        <input 
                                        type="text"
                                        value={this.state.interests3}
                                        onChange={this.update("interests3")}/>
                                    </div>
                                </label><br /><br />

                                <label className="edit-pronouns">Pronouns<br />
                                    <select onChange={this.update('pronouns')} name="pronouns" value={this.state.pronouns}>
                                    <option value="" selected="selected" hidden="hidden">Choose here</option>
                                        <option value="he/him">he/him</option>
                                        <option value="she/her">she/her</option>
                                        <option value="ze/hir">ze/hir</option>
                                        <option value="ve/ver">ve/ver</option>
                                        <option value="xe/xem">xe/xem</option>
                                    </select>
                               </label><br /><br />
    
                                <label className="age">Age:<br /><br />
                                        <input type="text" 
                                        value={this.state.age}
                                            onChange={this.update("age")} />
                                </label>
                                <br />
                                <label className="personality">Personality:<br /><br />
                                    <div className="personality-inputs">
                                        <input 
                                        type="text"
                                        value={this.state.personality1}
                                        onChange={this.update("personality1")}/>
    
                                        <input 
                                        type="text"
                                        value={this.state.personality2}
                                        onChange={this.update("personality2")}/>
    
                                        <input 
                                        type="text"
                                        value={this.state.personality3}
                                        onChange={this.update("personality3")}/>
                                    </div>    
                                </label> 
                                <br />
                                <br />
                                <label className="love-language">Love Language:<br /><br />
                                    <select onChange={this.update('loveLanguage')} name="languages" value={this.state.loveLanguage}>
                                        <option value="words of affirmation">words of affirmation</option>
                                        <option value="quality time">quality time</option>
                                        <option value="receiving gifts">receiving gifts</option>
                                        <option value="acts of service">acts of service</option>
                                        <option value="physical touch">physical touch</option>
                                    </select>
                                </label><br /><br />
                                <label className="location">Living In: <br />
                                    <br />
                                    <input 
                                    type="text"
                                    value={this.state.location}
                                    onChange={this.update("location")}/>
                                </label><br /><br />
                                <div className="happiness">
                                    <label className="edit-input">Happiness Level:
                                        <input type="range" min={1} max={100} value={parseInt(this.state.happinessLevel)}
                                        className="slider"  
                                        onChange={this.update("happinessLevel")}/>
                                    </label>
                                </div><br />
                                <div className="commitment">
                                    <label className="edit-input">Commitment Level:
                                        <input type="range" min={1} max={100} value={parseInt(this.state.commitmentLevel)} 
                                        className="slider" 
                                        onChange={this.update("commitmentLevel")} />
                                    </label>
                                </div><br /><br />
                                <input type="submit" value='save' className="edit-save-button"/><br /><br />
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }

}


export default withRouter(Edit)