import React, { useEffect } from 'react';
import './effect.css';
import { useForm } from '../../hooks/useForm';

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log('email changed');
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <div className='form-group'>
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='Ingrese password'
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button type='submit' className='btn btn-success'>
        Guardar
      </button>
    </form>
  );
};

export default FormWithCustomHook;
