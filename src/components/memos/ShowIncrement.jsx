import React, { memo } from 'react';

const ShowIncrement = memo(({ increment }) => {
  console.log('Mounted again');

  return (
    <button
      className='btn btn-info'
      onClick={() => {
        increment(5);
      }}
    >
      Increment
    </button>
  );
});

export default ShowIncrement;
