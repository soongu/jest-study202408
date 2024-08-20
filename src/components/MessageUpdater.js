import React, { useState } from 'react';

const MessageUpdater = () => {
  
  const [message, setMessage] = useState('Hello, World!');

  return (
    <div>
      <p>{message}</p>
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Update the message"
      />
    </div>
  );
};

export default MessageUpdater;
