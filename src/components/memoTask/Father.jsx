import React, { useState, useCallback } from 'react';
import Son from './Son';

import '../useEffect/effect.css';

const Father = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  // const incrementar = (num) => {
  //   setValor(valor + num);
  // };

  const incrementar = useCallback(
    (num) => {
      setValor((valor) => valor + num);
    },
    [setValor]
  );

  return (
    <div>
      <h1>Father</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Son key={n} numero={n} incrementar={incrementar} />
      ))}
    </div>
  );
};

export default Father;
