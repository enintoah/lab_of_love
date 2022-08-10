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
      console.log('link history',this.props.history)
      if(this.props.loggedIn){
         return(
              <div className='nav'>

                      <div className='lol'>
                        <a href="/"><img src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/logo+(3).png"/></a>
                     </div>

              <div className='links'>
                        {(this.props.history.location.pathname.includes('users') && !this.props.history.location.pathname.includes('edit'))?'':
                           <div className='img-div'>
                                <div className='profile-name'>
                                      <div><img className='navbar-img' 
                                            onClick={()=> (this.props.history.push(`/users/${userId}`))} 
                                            src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/profile+picture.png">
                                       </img></div>
                                      
                                  
                                     
                                  </div>
                                 

                                  <div className='profile-tag'>
                                    my profile
                                </div>
                          </div>
                                }

                                  {/* <div className='nav-name'>
                                     <h5>{name}</h5>
                                  </div>     */}
                        
                           <div className='menu' ref={this.container}>
                              <button type="button" class="button" onClick={this.handleButtonClick}>
                                ☰
                                    <div className='menu-tag'>
                                        <p>lab menu</p> 
                                    </div>
                              </button>
                              {this.state.open && (
                                  <div className='menu-dropdown'>
                                      <ul>
                                       { (this.props.history.location.pathname === '/') ? '':<li > <Link to={`/`} className='link-1'> matches</Link></li>}
                                        {(this.props.history.location.pathname.includes('edit'))? '':<li > <Link to={`/users/${userId}/edit`} className='link-2'> edit profile</Link></li>}
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
