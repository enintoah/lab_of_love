import { getMessages } from "../util/message_util"

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const RECEIVE_SOCKET_MESSAGE = "RECEIVE_SOCKET_MESSAGE"
export const EDIT_MESSAGE = "EDIT_MESSAGE"
export const RECEIVE_EDIT_MESSAGE = "RECEIVE_EDIT_MESSAGE"
export const REMOVE_MESSAGE = "REMOVE_MESSAGE"
export const CLEAR_MESSAGES = "CLEAR_MESSAGES"

export const receiveMessages = (messages) => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  }
}

export const receiveMessage = (message) => {
  return {
    type: RECEIVE_MESSAGE,
    message
  }
}

export const receiveDeleteMessage = (id) => {
  return {
    type: REMOVE_MESSAGE,
    id
  }
}

export const clearMessages = () => {
  return {
    type: CLEAR_MESSAGES
  }
}

export const editMessage = (message) => {
  return {
    type: EDIT_MESSAGE,
    message
  }
}

export const receiveEditMessage = (message) => {
  return {
    type: RECEIVE_EDIT_MESSAGE,
    message
  }
}

export const fetchMessages = (users) => dispatch => {
  getMessages(users).then(res => {dispatch(receiveMessages(res))})
}