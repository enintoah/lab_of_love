import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.redirectToWelcome = this.redirectToWelcome.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  demoLogin(e){
    // e.preventDefault();
    this.props.login({email:"demo@gmail.com",password:"123456"})
    this.props.history.push("/");
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className='errors' key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  redirectToWelcome() {
    this.props.history.push('/welcome')
  }

  render() {
    return (
      <div className="signup-form-container">
        <div className='login-box'>
          <div className='signup-link'>
            <NavLink to={'/signup'}>Signup</NavLink>
          </div>
          <div>
            <div onClick={this.redirectToWelcome} className='form-title-with-img'>
              <img className="top-logo" src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/logo+(3).png"/>
            </div>
            {this.renderErrors()}
            {/* <Link to={'/login'}>Login</Link> */}
           </div>
        <form className="login-form-area" onSubmit={this.handleSubmit}>
              <input type="text"
                className='form-input'
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="password"
                className='form-input'
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
            <input className='submit-button' type="submit" value="Login!" />
        </form>
        <h1 className='OR'>OR</h1>
            <button className="demo-login-button" onClick={() => this.demoLogin()}>Try A Demo!</button>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);