import React from "react";
import { useEffect } from "react";
import { io } from "socket.io-client";

const ENDPOINT = "http://localhost:5050";
var socket, selectedChatCompare; 

const MessagingPage = (props) =>  {

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('setup')
    // socket.on('connected', () => { console.log('true') })
  }, []);

  return (
    <h2>This is the messaging page!</h2>
  )
}

export default MessagingPage