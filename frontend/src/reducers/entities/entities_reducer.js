import { combineReducers } from "redux";
import userProfilesReducer from "./user_profiles_reducer";

const EntitiesReducer = combineReducers({
  userProfiles: userProfilesReducer
});

export default EntitiesReducer;