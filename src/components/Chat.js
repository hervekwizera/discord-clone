import React from 'react';
import './Chat.css';

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <h3># general</h3>
      </div>
      <div className="chat__messages">
        <p><strong>User1:</strong> Hello, everyone!</p>
        <p><strong>User2:</strong> Hi, User1!</p>
        {/* Add more messages */}
      </div>
      <div className="chat__input">
        <input type="text" placeholder="Type a message..." />
      </div>
    </div>
  );
}

export default Chat;