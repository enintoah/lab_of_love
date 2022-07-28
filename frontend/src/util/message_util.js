import axios from "axios";

export const getMessages = (data) => {
  return axios.post('/api/messages/', data)
}

export const createMessage = (data) => {
  return axios.post('/api/messages/create', data)
}

export const deleteMessage = (id) => {
  return axios.delete(`/api/messages/${id}`)
}

export const updateMessage = (id, data) => {
  return axios.patch(`/api/messages/${id}`, data)
}