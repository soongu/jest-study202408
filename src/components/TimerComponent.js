import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('Timer finished');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{message || 'Waiting...'}</div>;
};

export default TimerComponent;
