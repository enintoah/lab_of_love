import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom'



class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this)
    }
    
    logoutUser(e){
        e.preventDefault();
      
        this.props.logout()

    }
    
   

    getLinks(){
      const userId = this.props.currentUser.user_id;
      if(this.props.loggedIn){
         return(
             <div className='nav'>
                <div className='lol'>
                  <a href="/">Lab of Love</a>
                </div>
                <div className='links'>
                  <img className='navbar-img' onClick={()=> (this.props.history.push(`/users/${userId}`))} src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/profile+picture.png" />
                  <button onClick={this.logoutUser}>Logout</button>
                </div>
             </div>
         );
      }else{
        return(
           <Redirect to='/login'/>
        );
      }

    }
    render() {
      console.log('currentUser',this.props.currentUser)
        return (
          <div>
              { this.getLinks() }
          </div>
        );
    }

}

export default withRouter(NavBar);
