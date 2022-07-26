import React from 'react';
import { Link } from 'react-router-dom';


class Welcome extends React.Component{

     render(){
        return(
            <div>
               <div className='title'>
                   <h1>Welcome to Lab of Love</h1> 
               </div>
               <div className='login-signup-welcomepage' >
                    <Link to="/signup">
                    <button className='signup'>
                        Sign Up
                    </button>
                    </Link>
            
                    <Link to="/login">
                    <button className='login'>
                        Log In
                    </button> 
                    </Link>
                </div>
           </div>
        )
     }


}

export default Welcome