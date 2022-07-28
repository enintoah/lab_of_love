import { connect } from 'react-redux';
import MainPage from './main_page';
import { getCurrentUserProfile, getUserProfile, getMatches } from '../../actions/user_profile_actions';
import { fetchMessages } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    matches: state.entities.userProfiles
  }
};

const mapDispatchToProps = dispatch => {
  return{
    getCurrentUserProfile: (id) => dispatch(getCurrentUserProfile(id)),
    getUserProfile: (id) => dispatch(getUserProfile(id)),
    getMatches: (id) => dispatch(getMatches(id)),
    fetchMessages: (users) => dispatch(fetchMessages(users))
  }
}

  
  export default connect(mapStateToProps, mapDispatchToProps)(MainPage);