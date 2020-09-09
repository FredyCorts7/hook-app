import React, { useState, useCallback } from 'react';

import '../useEffect/effect.css';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };

  const increment = useCallback(
    (factor) => {
      setCounter((c) => c + factor);
    },
    [setCounter]
  );

  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;
