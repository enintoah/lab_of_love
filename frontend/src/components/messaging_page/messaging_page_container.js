import { connect } from 'react-redux';
import MessagingPage from './messaging_page'
import { fetchMessages } from '../../actions/message_actions';
import { getMatches } from '../../actions/user_profile_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    userProfiles: state.entities.userProfiles,
    currentUser: state.session.user
  }
};

const mapDispatchToProps = dispatch => {
  return{
    fetchMessages: (users) => dispatch(fetchMessages(users)),
    getMatches: (id) => dispatch(getMatches(id))
  }
}

  
  export default connect(mapStateToProps, mapDispatchToProps)(MessagingPage);