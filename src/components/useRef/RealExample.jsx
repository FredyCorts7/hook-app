import React, { useState } from 'react';
import '../useEffect/effect.css';
import MultipleCustomHooks from '../examples/MultipleCustomHooks';

const RealExample = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real Example</h1>
      <hr />

      {show && <MultipleCustomHooks />}

      <button
        className='btn btn-info mt-3'
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default RealExample;
