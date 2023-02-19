import React, { useState } from 'react';
export default function Messages(): JSX.Element {
  const [messages, setMessages] = useState(["message1", "message2"]);
  const inputmessage = (document.getElementById('inputText') as HTMLInputElement).value;

  function newMessage(): void {
    if (inputmessage !== '') {
      setMessages([...messages, inputmessage])
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

