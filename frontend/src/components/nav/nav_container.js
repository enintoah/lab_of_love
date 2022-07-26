import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './nav';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.entities.currentUserProfile
  });

const mapDispatchToProps = dispatch => {
  return{
    logout: () => dispatch(logout())
  }
}

  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar);