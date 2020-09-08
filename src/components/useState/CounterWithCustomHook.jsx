import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

const CounterWithCustomHook = () => {
  const { state, increment, reset, decrement } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <hr />

      <button onClick={() => decrement(2)} className='btn btn-danger'>
        -1
      </button>
      <button onClick={reset} className='btn btn-info'>
        reset
      </button>
      <button onClick={() => increment(1)} className='btn btn-success'>
        +1
      </button>
    </>
  );
};

export default CounterWithCustomHook;
