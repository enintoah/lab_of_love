import { connect } from 'react-redux';
import MainPage from './main_page';
import { getCurrentUserProfile, getUserProfile } from '../../actions/user_profile_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user
  }
};

const mapDispatchToProps = dispatch => {
  return{
    getCurrentUserProfile: (id) => dispatch(getCurrentUserProfile(id)),
    getUserProfile: (id) => dispatch(getUserProfile(id))
  }
}

  
  export default connect(mapStateToProps, mapDispatchToProps)(MainPage);