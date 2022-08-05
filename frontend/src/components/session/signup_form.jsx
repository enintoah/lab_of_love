import React from 'react';
import { withRouter } from 'react-router-dom';
// import Navbar from  '../nav/nav_container'
import { Link,Redirect } from 'react-router-dom';
import img from "./Products-Icon@4x.png"

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  demoLogin(e){
    // e.preventDefault();
    this.props.login({email:"demo@gmail.com",password:"123456"})
    this.props.history.push("/");
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.signedIn === true) {
  //     this.props.history.push('/login');
  //   }

  //   this.setState({errors: nextProps.errors})
  // }
 handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    let loginUser = {
      email: this.state.email,
      password: this.state.password
    };  

    console.log("this is the user being sent:", user);
    console.log('this is loginUSer',loginUser)

    this.props.signup(user)
    .then(() => this.props.history.push(`/users/${user.handle}/createProfile`))
  //  .then((loginUser) => this.props.login(loginUser))

      // .then(this.props.login(loginUser)
      //   .then(this.props.history.push(`/users/${user.handle}/createProfile`)))
   
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <div>
          <div className='form-title-with-img'>
            <img className='title-img' src={img}/>
            <h1 className='form-title'>Lab of Love</h1>
          </div>
            {/* <Link to={'/signup'}>Signup</Link> */}
            <Link to={'/login'}>Login</Link>
        </div>
        <form className="login-form-area" onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <br/>
              <input type="text"
                className='form-input'
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="text"
                className='form-input'
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="Name"
              />
            <br/>
              <input type="password"
                className='form-input'
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
              <input type="password"
                className='form-input'
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <br/>
            <input className='submit-button' type="submit" value="Sign up!" />
            {this.renderErrors()}
          </div>
        </form>
        <button className="demo-login-button" onClick={() => this.demoLogin()}>Try A Demo!</button>
      </div>
    );
  }
}

export default withRouter(SignupForm);