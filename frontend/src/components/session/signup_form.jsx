import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link,Redirect } from 'react-router-dom';

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
    this.redirectToWelcome = this.redirectToWelcome.bind(this)
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
      .then(res => this.props.login(res.user))
    //  .then((loginUser) => this.props.login(loginUser))
    // .then(() => this.props.history.push(`/users/${user.handle}/createProfile`))

      // .then(this.props.login(loginUser)
      //   .then(this.props.history.push(`/users/${user.handle}/createProfile`)))
   
  }

  redirectToWelcome() {
    this.props.history.push('/welcome')
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
        <div className='signup-box'>
          <div className='signup-link'>
            <Link to={'/login'}>Login</Link>
          </div>
          <div>
              <div onClick={this.redirectToWelcome} className='form-title-with-img'>
                <img className="top-logo" src="https://lacks-aa-dev.s3.us-west-1.amazonaws.com/logo+(3).png"/>
              </div>
              {/* <Link to={'/signup'}>Signup</Link> */}
          </div>
          <form className="login-form-area" onSubmit={this.handleSubmit}>
            <div className="signup-form">
                <input type="text"
                  className='form-input'
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />
                <input type="text"
                  className='form-input'
                  value={this.state.handle}
                  onChange={this.update('handle')}
                  placeholder="Name"
                />
                <input type="password"
                  className='form-input'
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
                <input type="password"
                  className='form-input'
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  placeholder="Confirm Password"
                />
              <input className='submit-button' type="submit" value="Sign up!" />
              {this.renderErrors()}
            </div>
          </form>
          <h1 className='OR'>OR</h1>
          <button className="demo-login-button" onClick={() => this.demoLogin()}>Try A Demo!</button>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);