import React from 'react';

import {Link, Redirect, withRouter} from 'react-router-dom'


class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.state = {
           open:false,
        };
        this.container = React.createRef();
      }
      
  
      handleButtonClick = () =>{
        this.setState((state) =>{
         return {
            open: !state.open,
         }
       })
    }

     handleClickOutside = (event) =>{
        if(
          this.container.current && 
          !this.container.current.contains(event.target)
        ){
           this.setState({
               open :false,
             })
        }
     }
    
    logoutUser(e){
        e.preventDefault();
        this.props.logout()
     }

     componentDidMount(){
       document.addEventListener("mouseup",this.handleClickOutside)
     }
     
     componentWillUnmount(){
          document.removeEventListener("mouseup",this.handleClickOutside)
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
                                <div className='profile-name'>
                                      <div>
                                            <img className='navbar-img' 
                                                    onClick={()=> (this.props.history.push(`/users/${userId}`))} 
                                                    src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/profile+picture.png">
                                            </img>
                                      </div>
                                  
                                      <div>
                                            <h3>{name}</h3>
                                      </div>    
                                  </div>

                                  <div className='profile-tag'>
                                    my profile
                                </div>
                          </div>
                        
                           <div className='menu' ref={this.container}>
                              <button type="button" class="button" onClick={this.handleButtonClick}>
                                ☰
                              </button>
                              {this.state.open && (
                                  <div className='menu-dropdown'>
                                      <ul>
                                        <li > <Link to={`/messaging/62e037d34780df32d1a79921`} className='link-1'> messages</Link></li>
                                        <li > <Link to={`/users/${userId}/edit`} className='link-2'> edit profile</Link></li>
                                        <li onClick={this.logoutUser}> log out</li>
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
