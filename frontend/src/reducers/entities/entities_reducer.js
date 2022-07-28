import { combineReducers } from "redux";
import userProfilesReducer from "./user_profiles_reducer";
import currentUserProfileReducer from "./current_user_profile";
import messagesReducer from "./messages_reducer";

const EntitiesReducer = combineReducers({
  userProfiles: userProfilesReducer,
  currentUserProfile: currentUserProfileReducer,
  messages: messagesReducer
});

export default EntitiesReducer;