import React from 'react';
import { Link } from 'react-router-dom';


class Welcome extends React.Component{

     render(){
        return(
            <div>
                <div className='upper-page'>
                    <div className='title'>
                        <h1 className='welcome-title'>Welcome to Lab of Love</h1> 
                    </div>
                    <div className='login-signup-welcomepage' >
                            <Link to="/signup">
                            <button className='get-started'>
                                Get started
                            </button>
                            </Link>
                    
                            {/* <Link to="/login">
                            <button className='login'>
                                Log In
                            </button> 
                            </Link> */}
                    </div>
                </div>
                <div className='meet-the-devs'>
                    
                </div>
           </div>
        )
     }


}

export default Welcome