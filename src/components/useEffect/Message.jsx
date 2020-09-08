import React, { useEffect, useState } from 'react';

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    //   console.log('Component Message Mounted');
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      //   console.log(coords);
      setCoords(coords);
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      //   console.log('Component Message Unmounted');

      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <div>
      <h2>You're beautiful</h2>
      <h4>
        x: {x} y: {y}
      </h4>
    </div>
  );
};

export default Message;
