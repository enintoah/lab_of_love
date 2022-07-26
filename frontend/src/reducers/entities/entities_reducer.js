import { combineReducers } from "redux";
import userProfilesReducer from "./user_profiles_reducer";
import currentUserProfileReducer from "./current_user_profile";

const EntitiesReducer = combineReducers({
  userProfiles: userProfilesReducer,
  currentUserProfile: currentUserProfileReducer
});

export default EntitiesReducer;