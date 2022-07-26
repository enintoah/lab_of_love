import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

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
                        <a target="_blank" href="https://www.linkedin.com/in/anthonie-lorsithong-551741232/"><h1 className='names-nav'>Anthonie</h1></a>
                        <a target="_blank" href="https://www.linkedin.com/in/ignacio-herrera-tejos-a93b80246/"><h1 className='names-nav'>Ignacio</h1></a>
                        <a target="_blank" href="https://www.linkedin.com/in/zlin31/"><h1 className='names-nav'>Brian</h1></a>
                        <a target="_blank" href="https://www.linkedin.com/in/tuesday-ai/"><h1 className='names-nav'>Jacob</h1></a>
                    </div>
                    <div className="button-holder">
                        <button className='login-button' onClick={() => this.props.history.push("/login")}>Login</button>
                        <button className='demo-button' onClick={e =>this.demoLogin(e)}>Try a Demo</button>
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

                                <a href="#meet-the-devs">
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
                    <div id='meet-the-devs'>
                        <h1>The Devs</h1>
                            <div className='dev-card'>
                                <h1 className='dev-name'>Anthonie Lorsithong</h1>
                                <div className='dev-info'>
                                    <p>Team Lead</p>
                                    <div className='img-placeholder anthonie'>
                                        <img src='https://lacks-aa-dev.s3.us-west-1.amazonaws.com/anthonie.jpg'/>
                                    </div>
                                    <a target="_blank" href="https://github.com/enintoah" class="fa-brands fa-github"></a>
                                    <a target="_blank" href="https://www.linkedin.com/in/anthonie-lorsithong-551741232/" class="fa-brands fa-linkedin-in"></a>
                                </div>
                            </div>
                            <div className='dev-card'>
                                <h1 className='dev-name'>Ignacio Herrera</h1>
                                <div className='dev-info'>
                                    <p>Backend Designer</p>
                                    <div className='img-placeholder'></div>
                                    <a target="_blank" href="https://github.com/hherreratejos" class="fa-brands fa-github"></a>
                                    <a target="_blank" href="https://www.linkedin.com/in/ignacio-herrera-tejos-a93b80246/" class="fa-brands fa-linkedin-in"></a>
                                </div>
                            </div>
                            <div className='dev-card'>
                                <h1 className='dev-name'>Brian Lin</h1>
                                <div className='dev-info'>
                                    <p>Frontend Lead</p>
                                    <div className='img-placeholder'>
                                        <img src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/1590978917766.jpeg"/>
                                    </div>
                                    <a target="_blank" href="https://github.com/Opengundumstyle" class="fa-brands fa-github"></a>
                                    <a target="_blank" href="https://www.linkedin.com/in/zlin31/" class="fa-brands fa-linkedin-in"></a>
                                </div>
                            </div>
                            <div className='dev-card'>
                                <h1 className='dev-name'>Jacob Justice</h1>
                                <div className='dev-info'>
                                    <p>UI/UX Design</p>
                                    <div className='img-placeholder'>
                                        <img src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/jacob.jpeg" />
                                    </div>
                                    <a target="_blank" href="https://github.com/Jablob44" class="fa-brands fa-github"></a>
                                    <a target="_blank" href="https://www.linkedin.com/in/tuesday-ai/" class="fa-brands fa-linkedin-in"></a>
                                </div>
                            </div>

                    </div>
           </div>
        )
     }


}

export default withRouter(Welcome)