import React, { useLayoutEffect, useRef, useState } from 'react';
import './layout.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];
  const [boxSize, setBoxSize] = useState({});

  const paragraphTag = useRef();

  useLayoutEffect(() => {
    setBoxSize(paragraphTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className='blockquote text-right'>
        <p ref={paragraphTag} className='mb-0'>
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button onClick={() => increment()} className='btn btn-primary col-6'>
        Next quote
      </button>
    </div>
  );
};

export default Layout;
