import React from 'react';
import Navbar from  '../nav/nav_container'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
              <img className='title-img' src="../../../backgound_images/Products-Icon@4x.png"/>
              <h1 className='form-title'>Lab of Love</h1>
          </div>
            <Link to={'/signup'}>Signup</Link>
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
            {this.renderErrors()}
        </form>
        <button>Try A Demo!</button>
      </div>
    );
  }
}

export default withRouter(LoginForm);