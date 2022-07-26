import React from 'react';
import {Link, Redirect} from 'react-router-dom'


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
      if(this.props.loggedIn){
         return(
             <div>
                <Link to={'/'}>All Tweets</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/chat'}>chat</Link>
                <button onClick={this.logoutUser}>Logout</button>
             </div>
         );
      }else{
        return(
           <Redirect to='/login'/>
        );
      }

    }
    render() {
        return (
          <div>
              <h1>lab of love</h1>
              { this.getLinks() }
          </div>
        );
    }

}

export default NavBar;
