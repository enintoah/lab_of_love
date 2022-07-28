import {
  RECEIVE_MESSAGE,
  RECEIVE_MESSAGES,
  REMOVE_MESSAGE,
  CLEAR_MESSAGES
} from './../../actions/message_actions'
import { RECEIVE_USER_LOGOUT } from '../../actions/session_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_MESSAGE:
      newState[action.message._id] = action.message
      newState[action.message._id].type = 'create'
      return newState;
    case RECEIVE_MESSAGES:
      action.messages.data.forEach(el => {
        newState[el._id] = el
        newState[el._id].type = 'create'
      })
      return newState 
    case REMOVE_MESSAGE:
      delete newState[action.id]
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