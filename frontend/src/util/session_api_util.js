import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = (userData) => {
  return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
};

export const findUserProfilebyEmail = (userData) => {
  return axios.post('/api/users/findByEmail', userData)
}

export const workaroundNewUser = (id) => {
  return axios.get(`/api/users/workaround/${id}`)
}

export const deleteUser = (id) => {
  return axios.delete(`/api/users/${id}`)
}