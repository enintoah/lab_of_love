import React from "react";
import { updateUserProfile } from "../../util/user_profile_util";
import { withRouter } from 'react-router-dom'


class Edit extends React.Component{

 constructor(props){
    super(props);
    this.state = {
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
    }

      this.handleSubmit = this.handleSubmit.bind(this)
     
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
        return(
            <div>
              <h1>Edit Page</h1>
              <br />
              <form onSubmit={this.handleSubmit}>
                
                     {/* <label>Name</label>
                    
                       <br />
                       <input 
                        type="text" 
                        value={this.state.name}
                        onChange={this.update("name")}/> */}
                       <br />
                       <br />
                       <label>Description:
                        <br />
                        <textarea cols="30"
                            rows="10"
                            value={this.state.description}
                            onChange={this.update("description")}
                            />
                        </label>
                         <br />
                         <br />
                         <label>Passions:
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
                        </label> 
                         <br />
                        <br />
                        {/* <div className="radio"> */}
                        {/* <p>Gender:</p>
                            <label>
                                <input
                                type="radio"
                                value="Male"
                                checked={this.state.gender === "male"}
                                onChange={this.update("gender")}
                                />
                                Male
                            </label>
                            </div> */}

{/* 
                            <div className="radio">
                                <label>
                                    <input
                                    type="radio"
                                    value="Female"
                                    checked={this.state.gender === "female"}
                                    onChange={this.update("gender")}
                                    />
                                    Female
                                </label>
                            </div> */}
                            <br />
                            
                            <label>age
                            <input type="text" 
                               value={this.state.age}
                                onChange={this.update("age")} />
                            </label>
                             <br />
                            <label>personalities
                            <br />
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
                            </label> 
                           <br />
                           <br />

                          <label htmlFor="lang">loveLanguage</label>
                           <br />
                           <select onChange={this.update('loveLanguage')} name="languages" value={this.state.loveLanguage}>
                               <option value="words of affirmation">words of affirmation</option>
                               <option value="quality time">quality time</option>
                               <option value="receiving gifts">receiving gifts</option>
                               <option value="acts of service">acts of service</option>
                               <option value="physical touch">physical touch</option>
                           </select>
                           <br />
                           <br />
                           <label>Living In</label> 
                            <br />
                            <input 
                              type="text"
                              value={this.state.location}
                              onChange={this.update("location")}/>
                           <br />
                           <br />
                            
                           <div className="happiness-slider">
                           <label htmlFor="happiness" id="happiness-label">happinessLevel</label>
                           <br />
                             <input type="range" min={1} max={100} value={parseInt(this.state.happinessLevel)}
                                className="slider" id="happiness-label" 
                                onChange={this.update("happinessLevel")}/>
                          </div>

                          <div className="commitment-slider">
                          <label htmlFor="commitment" id="commitment-label">commitmentLevel</label>
                          <br />
                             <input type="range" min={1} max={100} value={parseInt(this.state.commitmentLevel)} 
                                className="slider" id="commitment-label"
                                onChange={this.update("commitmentLevel")} />
                          </div>

                      <input type="submit" />


                    
              </form>
            </div>
        )
    }

}


export default withRouter(Edit)