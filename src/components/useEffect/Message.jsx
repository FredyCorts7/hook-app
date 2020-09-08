import React, { useEffect } from 'react';

const Message = () => {
  useEffect(() => {
    console.log('Component Message Mounted');
    return () => {
      console.log('Component Message Unmounted');
    };
  }, []);

  return (
    <div>
      <h2>You're beautiful</h2>
    </div>
  );
};

export default Message;
