import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component{
  
    
    demoLogin(e){
        e.preventDefault();
        this.props.demo({email:"demo@gmail.com",password:"123456"});

  }

  componentWillReceiveProps() {
   
      this.props.history.push('/');

  }


     render(){
        return(
            <div className='big-div'>
                <div className='welcome-nav-bar'>
                    <div className='left-side-nav'>
                        <img className="top-logo" src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/logo+(3).png"/>
                        <h1 className='names-nav'>Anthonie </h1>
                        <h1 className='names-nav'>Brian </h1>
                        <h1 className='names-nav'>Ignacio </h1>
                        <h1 className='names-nav'>Jacob</h1>
                    </div>
                    <div className="button-holder">
                        <button className='login-button' onClick={() => this.props.history.push("/login")}>Login</button>
                        <button className='demo-button' onClick={e =>this.demoLogin(e)}>Try as Demo</button>
                    </div>
                </div>
                <div className='upper-page'>
                    <div className='words'>
                        <div className='title'>
                            <h1 className='welcome-title'>Welcome to the Lab of Love</h1> 
                        </div>
                        <div className='login-signup-welcomepage' >
                                <Link to="/signup">
                                    <button className='get-started'>
                                        Get started
                                    </button>
                                </Link>

                                <a href="meet-the-devs">
                                    <button className='get-devs'>
                                        Meet the team!
                                    </button>
                                </a>
                        
                                {/* <Link to="/login">
                                <button className='login'>
                                    Log In
                                </button> 
                                </Link> */}
                        </div>
                        <div className='test-your-skills'>
                                <h1 className='test-your-skills-h1'>Test your abilities in the labs of love!</h1>
                        </div>
                    </div>
                    <div className='image-div'>
                        <img className="welcome-image" src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/logo+(2).png"/>
                    </div>
                </div>
                {/* <a id='bottom-welcome-page'> */}
                    <div className='meet-the-devs'>
                        <div className='dev-card anthonie'>
                            <h1 className='dev-name'>Anthonie</h1>
                        </div>
                        <div className='dev-card H'>
                            <h1 className='dev-name'>Ignacio</h1>
                        </div>
                        <div className='dev-card brian'>
                            <h1 className='dev-name'>Brian</h1>
                        </div>
                        <div className='dev-card jacob'>
                            <h1 className='dev-name'>Jacob</h1>
                        </div>
                    </div>
                {/* </a> */}
           </div>
        )
     }


}

export default Welcome