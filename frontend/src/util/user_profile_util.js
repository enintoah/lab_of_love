import axios from "axios";

export const fetchUserProfile = (id) => {
  return axios.get(`/api/user_profile/${id}`)
}

export const fetchMatches = (id) => {
  return axios.get(`/api/users/${id}`)
}