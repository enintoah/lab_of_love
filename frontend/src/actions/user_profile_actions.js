import { fetchUserProfile } from "../util/user_profile_util"

export const RECEIVE_USER_PROFILES = "RECEIVE_USER_PROFILES"
export const RECEIVE_USER_PROFILE = "RECEIVE_USER_PROFILE"
export const RECEIVE_CURRENT_USER_PROFILE = "RECEIVE_CURRENT_USER_PROFILE"

export const receiveUserProfiles = (profiles) => {
  return {
    type: RECEIVE_USER_PROFILES,
    profiles
  }
}

export const receiveUserProfile = (profile) => {
  return {
    type: RECEIVE_USER_PROFILE,
    profile
  }
}

export const receiveCurrentUserProfile = (profile) => {
  return {
    type: RECEIVE_CURRENT_USER_PROFILE,
    profile
  }
}

export const getUserProfile = (id) => dispatch => {
  return fetchUserProfile(id).then((res) => dispatch(receiveUserProfile(res)));
}

export const getCurrentUserProfile = (id) => dispatch => {
  return fetchUserProfile(id).then((res) => dispatch(receiveCurrentUserProfile(res)));
}