import { connect } from 'react-redux';
import ChatBox from './chat_box';
import { receiveMessage, clearMessages, receiveDeleteMessage, editMessage} from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    messages: state.entities.messages,
    currentUser: state.session.user,
    userProfiles: state.entities.userProfiles,
  }
};

const mapDispatchToProps = dispatch => {
  return{
    clearMessages: () => dispatch(clearMessages()),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    destroyMessage: (id) => dispatch(receiveDeleteMessage(id)),
    editMessage: (message) => dispatch(editMessage(message))
  }
}

  
  export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);