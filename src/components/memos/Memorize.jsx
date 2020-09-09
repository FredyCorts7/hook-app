import React, { useState } from 'react';
import Small from './Small';

import { useCounter } from '../../hooks/useCounter';

import '../useEffect/effect.css';

const Memorize = () => {
  const { counter, increment } = useCounter();
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />

      <button className='btn btn-primary' onClick={() => increment()}>
        +1
      </button>

      <button
        className='btn btn-outline-primary ml-2'
        onClick={() => setShow(!show)}
      >
        {show ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default Memorize;
