import { RECEIVE_USER_PROFILE_ERRORS } from "../actions/user_profile_actions";
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const _nullErrors = [];

const UserProfileErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_PROFILE_ERRORS:
      return action.errors;
    case RECEIVE_USER_LOGOUT: 
      return []
    default:
      return state;
  }
};

export default UserProfileErrorsReducer