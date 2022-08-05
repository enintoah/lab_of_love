import axios from "axios";

export const fetchUserProfile = (id) => {
  return axios.get(`/api/user_profile/${id}`)
}

export const fetchMatches = (id) => {
  return axios.get(`/api/users/${id}`)
}

export const updateUserProfile =(profile) =>{
    return axios.patch(`/api/user_profile/${profile.user_id}`, profile)
}

export const createUserProfile = (profile) =>{
    console.log("this is the profile in the createUserProfile util function: ", profile)
    return axios.post(`/api/user_profile/`, profile)
}