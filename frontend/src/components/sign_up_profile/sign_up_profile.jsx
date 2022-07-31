
import React from 'react'


class CreateProfile extends React.Component{
      
    constructor(props){
        super(props);
        this.state = {
              imageUrl:'',
              name:this.props.currentUserProfile.name,
              description:'',
              interests1:'',
              interests2:'',
              interests3:'',
              gender:'',
              personality1:'',
              personality2:'',
              personality3:'',
              loveLanguage:'',
              happinessLevel:50,
              commitmentLevel:50,
              age:18,
              location:'',
              user_id:this.props.currentUserProfile.user_id,
              pronouns:'',
              errors:{}
           }
          this.handleSubmit = this.handleSubmit.bind(this)
     }

   handleSubmit(e){
     e.preventDefault()
     let newState = Object.assign({},this.state)
     this.setState({errors: this.props.errors})
     this.props.createSignInProfile(newState).then(()=>{
         this.props.history.push('/')
     })
     

   }

  update(property){
     return e =>this.setState({[property]:e.currentTarget.value})
  }

//   continueButton(e){
//       e.preventDefault();
//       this.props.
//   }
  getBirthDay(){
        return(
            <div>
                    <form class = "container">
                        <label >birthday : <span>*</span></label>
                        <select id ="year" name = "yyyy" onchange="change_year(this)">
                        </select>
                        <select  id ="month" name = "mm" onchange="change_month(this)">
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
    const currentUser = this.props.currentUser
     return(
        <div className='create-form'>
            <form onSubmit={this.handleSubmit}>
                  {this.getBirthDay()}
            
            <input type="submit" />
            </form>
        </div>
     )
  }


}

export default CreateProfile