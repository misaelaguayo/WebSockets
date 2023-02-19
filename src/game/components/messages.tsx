import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client'

const socket = io();

export default function Messages(): JSX.Element {
  const [messages, setMessages] = useState([]);

  socket.on('chat message', (msg) => {
    setMessages([...messages, msg]);
  })

  function newMessage(): void {
    const inputTextElement = document.getElementById('inputText') as HTMLInputElement
    const message = inputTextElement.value;
    if (message !== '') {
      socket.emit('chat message', message);

      inputTextElement.value = '';
    }
  }

  return (
    <div>
      <div className="messages">
        {messages.map((message) => {
          return <p key={message}>{message}</p>
        })}
      </div><div className="input">
        <input type="text" id="inputText" />
        <button onClick={newMessage} id="inputSubmit">Submit</button>
      </div>
    </div>)
}

