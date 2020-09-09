import React, { useState, useMemo } from 'react';

import { useCounter } from '../../hooks/useCounter';

import { hardProcess } from '../helpers/hardProcess';

import '../useEffect/effect.css';

const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoHardProcess = useMemo(() => hardProcess(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <hr />
      <h3>
        Counter: <small>{counter}</small>
      </h3>

      <p>{memoHardProcess}</p>

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

export default MemoHook;
