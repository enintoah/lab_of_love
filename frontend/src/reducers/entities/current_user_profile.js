import {
  RECEIVE_CURRENT_USER_PROFILE
} from '../../actions/user_profile_actions'
import { RECEIVE_USER_LOGOUT } from '../../actions/session_actions';

const userProfilesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER_PROFILE:
      
    case RECEIVE_USER_LOGOUT: 

    default:
      return state;
  }
};

export default userProfilesReducer;