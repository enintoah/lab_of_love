import {
  RECEIVE_MESSAGE,
  RECEIVE_MESSAGES,
  REMOVE_MESSAGE,
  CLEAR_MESSAGES,
  EDIT_MESSAGE,
  RECEIVE_EDIT_MESSAGE
} from './../../actions/message_actions'
import { RECEIVE_USER_LOGOUT } from '../../actions/session_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_MESSAGE:
      newState[action.message._id] = action.message
      return newState;
    case RECEIVE_MESSAGES:
      action.messages.data.forEach(el => {
        newState[el._id] = el
      })
      return newState 
    case REMOVE_MESSAGE:
      delete newState[action.id];
      return newState; 
    case EDIT_MESSAGE: 
      newState[action.message._id].type = 'edit'
      return newState;
    case RECEIVE_EDIT_MESSAGE:
      delete newState[action.message._id].type
      return newState
    case CLEAR_MESSAGES:
      return {}
    case RECEIVE_USER_LOGOUT: 
      return {}
    default:
      return state;
  }
};

export default messagesReducer;