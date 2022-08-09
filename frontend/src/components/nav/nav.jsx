import React from 'react';

import {Link, Redirect, withRouter} from 'react-router-dom'


class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.state = {
           open:false,
        };
      }
      
  
      handleButtonClick = () =>{
        this.setState((state) =>{
         return {
            open: !state.open,
         }
       })
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
                           <div className='img-div'>
                                <div>
                                      <img className='navbar-img' 
                                              onClick={()=> (this.props.history.push(`/users/${userId}`))} 
                                              src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/profile+picture.png">
                                      </img>
                                </div>
                             
                                <div>
                                      <h3>{name}</h3>
                                </div>    

                                <div className='profile-tag'>
                                  my profile
                               </div>

                      

                          </div>
                        
                           <div className='menu'>
                              <button type="button" class="button" onClick={this.handleButtonClick}>
                                ☰
                              </button>
                              {this.state.open && (
                                  <div className='menu-dropdown'>
                                      <ul>
                                        <li > <Link to={`/messaging/62e037d34780df32d1a79921`}> messages</Link></li>
                                        <li > <Link to={`/users/${userId}/edit`}> edit profile</Link></li>
                                        <li> <button onClick={this.logoutUser}>Logout</button></li>
                                      </ul>
                                  </div>
                                )}
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
