import React from 'react';
import { useForm } from '../../hooks/useForm';

const TodoAdd = ({ handleAddTodo }) => {
  const [formValues, handleInputChange, reset] = useForm({
    title: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      title,
      description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  const { title, description } = formValues;

  return (
    <form onSubmit={handleSubmit} className='container'>
      <h3 className='text-center'>Add ToDo</h3>

      <input
        type='text'
        name='title'
        placeholder='ex. learn ...'
        className='form-control'
        autoComplete='off'
        value={title}
        onChange={handleInputChange}
      />

      <input
        type='text'
        name='description'
        placeholder='ex. about that ...'
        className='form-control mt-2'
        autoComplete='off'
        value={description}
        onChange={handleInputChange}
      />

      <button type='submit' className='btn btn-outline-success btn-block mt-2'>
        Add ToDo
      </button>
    </form>
  );
};

export default TodoAdd;
