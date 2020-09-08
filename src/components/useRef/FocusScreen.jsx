import React, { useRef } from 'react';
import '../useEffect/effect.css';

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type='text'
        className='form-control'
        placeholder='Ingrese nombre'
      />

      <button className='btn btn-outline-info mt-3' onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
