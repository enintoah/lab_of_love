import { connect } from 'react-redux';
import ChatBox from './chat_box';
import { clearMessages } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    messages: state.entities.messages,
    currentUser: state.session.user,
    userProfiles: state.entities.userProfiles,
  }
};

const mapDispatchToProps = dispatch => {
  return{
    clearMessages: () => dispatch(clearMessages())
  }
}

  
  export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);