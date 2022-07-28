import React from "react";

class Edit extends React.Component{

 constructor(props){
    super(props);
    //   this.state =  this.props.currentUserProfile
    this.state = {
          name:this.props.currentUserProfile.name,
          description:this.props.currentUserProfile.description,
          interests:this.props.currentUserProfile.interests,
          gender:this.props.currentUserProfile.gender,
          personality:this.props.currentUserProfile.personality,
          loveLanguage:this.props.currentUserProfile.loveLanguage,
          happinessLevel:this.props.currentUserProfile.happinessLevel,
          commitmentLevel:this.props.currentUserProfile.commitmentLevel,
          age:this.props.currentUserProfile.age.toString(),
          location:this.props.currentUserProfile.location,
          user_id:this.props.currentUserProfile.user_id,
          pronouns:this.props.currentUserProfile.pronouns,
    }

      this.handleSubmit = this.handleSubmit.bind(this)
     
 }

    handleSubmit(e){
        e.preventDefault()
        
        let newState = Object.assign({},this.state)
        // console.log(newState)
        this.props.editUserProfile(newState)
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
                
                     <label>Name</label>
                    
                       <br />
                       <input 
                        type="text" 
                        value={this.state.name}
                        onChange={this.update("name")}/>
                       <br />
                       <br />
                       <label>Description</label>
                        <br />
                        <textarea cols="30"
                            rows="10"
                            value={this.state.description}
                            onChange={this.update("description")}
                            />
                         <br />
                         <br />
                         <label>passions</label> 
                          <input 
                              type="text"
                              value={this.state.interests}
                              onChange={this.update("interests")}/>
                         <br />
                        <br />
                        <div className="radio">
                        <p>Gender:</p>
                            <label>
                                <input
                                type="radio"
                                value="Male"
                                checked={this.state.gender === "male"}
                                onChange={this.update("gender")}
                                />
                                Male
                            </label>
                            </div>


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
                            </div>
                            <br />
                            
                            {/* <label>age
                            <input type="text" 
                               value={this.state.age}
                                onChange={this.update("age")} />
                            </label> */}
                             <br />
                            <label>personalities</label> 
                            <br />
                            <input 
                              type="text"
                              value={this.state.personality}
                              onChange={this.update("personality")}/>
                           <br />
                           <br />

                          <label htmlFor="lang">loveLanguage</label>
                           <br />
                           <select name="languages" id="lang">
                              <option value="select">--Select a language--</option>
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
                                class="slider" id="happiness-label" 
                                onChange={this.update("happinessLevel")}/>
                          </div>

                          <div className="commitment-slider">
                          <label htmlFor="commitment" id="commitment-label">commitmentLevel</label>
                          <br />
                             <input type="range" min={1} max={100} value={parseInt(this.state.commitmentLevel)} 
                                class="slider" id="commitment-label"
                                onChange={this.update("commitmentLevel")} />
                          </div>

                      <input type="submit" />


                    
              </form>
            </div>
        )
    }

}


export default Edit