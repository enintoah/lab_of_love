import React from 'react';

import {Link, Redirect, withRouter} from 'react-router-dom'


class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    

     
    }
    
    logoutUser(e){
        e.preventDefault();
      
        this.props.logout()

    }
    
  
    render() {
     
      const userId = this.props.currentUser.user_id;
      const name = this.props.currentUser.name


      if(this.props.loggedIn){
          
         return(
             <div className='nav'>

                      <div className='lol'>
                        <a href="/"><img src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/logo+(3).png"/></a>
                      </div>

                      <div className='links'>
                    
                          <div>
                            <img className='navbar-img' 
                                    onClick={()=> (this.props.history.push(`/users/${userId}`))} 
                                    src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/profile+picture.png">
                            </img>
                               <h2 className='profile-tag'>my profile</h2>
                          </div>

                            <div>
                               <h3>{name}</h3>
                            </div>    
                     
                        
                           <div className='menu'>
                                  <div className='menu-dropdown'>
                                      <button onClick={this.logoutUser}>Logout</button>
                                  </div>

                             </div>
                          
                                    
 
                      </div>

                  
                      
             </div>
         );
      }else{
        return(
           <Redirect to='/login'/>
        );
      }
    }

}

export default withRouter(NavBar);
