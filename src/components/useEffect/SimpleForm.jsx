import React, { useState, useEffect } from 'react';
import './effect.css';
import Message from './Message';

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log('Hey!');
  }, []);

  useEffect(() => {
    console.log('formState changed!');
  }, [formState]);

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Ingrese nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>

      {name === 'Camila' && <Message />}

      <div className='form-group'>
        <input
          type='email'
          name='email'
          className='form-control'
          placeholder='Ingrese email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default SimpleForm;
