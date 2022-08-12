import { combineReducers } from 'redux';
import UserProfileErrorsReducer from './create_profile_reducer';
import SessionErrorsReducer from './session_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  UserProfile: UserProfileErrorsReducer
});