import React from 'react';
import '../useEffect/effect.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, loading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className='alrt alert-info text-center'>Loading...</div>
      ) : (
        <>
          <blockquote className='blockquote text-right'>
            <p className='mb-0'>{quote}</p>
            <footer className='blockquote-footer'>{author}</footer>
          </blockquote>

          <div className='container'>
            <div className='row'>
              <button
                onClick={() => decrement()}
                className='btn btn-warning col-6'
              >
                Previous quote
              </button>

              <button
                onClick={() => increment()}
                className='btn btn-primary col-6'
              >
                Next quote
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MultipleCustomHooks;
