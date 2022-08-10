import React from 'react'

class CreateProfile extends React.Component{
      
    constructor(props){
        super(props);

        this.state = {
          user_id: this.props.match.params.user_id,
          name:'',
          description:'',
          interests1:'',
          interests2:'',
          interests3:'',
          age:18,
          gender:'',
          personality1:'',
          personality2:'',
          personality3:'',
          loveLanguage: 'n/a',
          imageUrl:'https://lacks-aa-dev.s3.us-west-1.amazonaws.com/profile+picture.png',
          happinessLevel:50,
          location:'',
          commitmentLevel:50,
          pronouns:'n/a',
           }

          this.handleSubmit = this.handleSubmit.bind(this)
     }

   handleSubmit(e){
     e.preventDefault()
   
     let newState = Object.assign({},this.state)
        console.log('final state',this.state)
     this.props.createSignInProfile(newState)
        .then(this.props.history.push('/'))
   }

  update(property){
     return e =>this.setState({[property]:e.currentTarget.value})
  }

  getBirthDay(){
        return(
            <div>
                    <form class = "container">
                        <label >birthday : <span>*</span></label>
                        <select id ="year" name = "yyyy" onChange="change_year(this)">
                        </select>
                        <select  id ="month" name = "mm" onChange="change_month(this)">
                        </select>
                        <select id ="day" name = "dd" >
                        </select>
                            <br />
                            <br />
                    <label >birthday : <span>*</span></label>
                        <input id ="input_year" class="date" name = "year" patren="[\d]{4}" />
                        <select  id ="month2" name = "month" >
                        </select>
                        <input id ="input_day" class="date" name = "day" patrin="[\d]{2}"/>
                    </form>
            </div>
            )
       }

  render(){

    let id = this.props.match.params.user_id

     return(
        <div className='create-form'>
            <form onSubmit={(e) =>this.handleSubmit(e)}>
                   <label className="create-name">Name: <br />
                          <input 
                          type='text'
                          value={this.state.name}
                          onChange={this.update("name")}
                          />
                    </label><br /><br />
                      
                    <label className="create-description">Description: <br />
                          <textarea cols="30"
                          rows="10"
                          value={this.state.description}
                          onChange={this.update("description")}
                          />
                    </label><br /><br />

                    <label className="create-age">Age:<br />
                        <input type="text" 
                          value={this.state.age}
                          onChange={this.update("age")} />
                    </label>
                    <br />
                    <br />

                    <label className='create-gender'>Gender:<br />
                        <input type="text" 
                          value={this.state.gender}
                          onChange={this.update("gender")} />
                    </label>
                      <br />
                      <br />
             
                    <label className="create-pronouns">Pronouns:<br />
                                <select onChange={this.update('pronouns')} name="pronouns" value='{this.state.pronouns}'>
                                    <option value="he/him">he/him</option>
                                    <option value="she/her">she/her</option>
                                    <option value="ze/hir">ze/hir</option>
                                    <option value="ve/ver">ve/ver</option>
                                    <option value="xe/xem">xe/xem</option>
                                </select>
                      </label><br /><br />

                    <label className="create-love-language">Love Language:<br /><br />
                                <select onChange={this.update('loveLanguage')} name="languages" value={this.state.loveLanguage}>
                                    <option value="words of affirmation">words of affirmation</option>
                                    <option value="quality time">quality time</option>
                                    <option value="receiving gifts">receiving gifts</option>
                                    <option value="acts of service">acts of service</option>
                                    <option value="physical touch">physical touch</option>
                                </select>
                      </label><br /><br />
                    
                      <label className="create-location">Living In: 
                                <br />
                                <input 
                                type="text"
                                value={this.state.location}
                                onChange={this.update("location")}/>
                      </label><br /><br />

                      <div className="create-happiness">
                            <label>Happiness Level:
                                <input type="range" min={1} max={100} value={parseInt(this.state.happinessLevel)}
                                className="slider"  
                                onChange={this.update("happinessLevel")}/>
                            </label>
                       </div><br />

                       <div className="create-commitment">
                                <label>Commitment Level:
                                    <input type="range" min={1} max={100} value={parseInt(this.state.commitmentLevel)} 
                                    className="slider" 
                                    onChange={this.update("commitmentLevel")} />
                                </label>
                       </div><br /><br />

                       <label className="create-passions">Passions:
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
                            </label><br />

                            <label className="create-personality">Personality:
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

                  <input type="submit" />
            </form>
        </div>
     )
  }


}

export default CreateProfile