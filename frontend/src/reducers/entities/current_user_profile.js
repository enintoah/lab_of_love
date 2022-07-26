import {
  RECEIVE_CURRENT_USER_PROFILE
} from '../../actions/user_profile_actions'
import { RECEIVE_USER_LOGOUT } from '../../actions/session_actions';

const currentUserProfileReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER_PROFILE:
      return action.profile.data
    case RECEIVE_USER_LOGOUT: 
      return {}
    default:
      return state;
  }
};

export default currentUserProfileReducer;