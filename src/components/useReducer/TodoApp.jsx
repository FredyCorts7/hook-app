import React, { useReducer, useEffect } from 'react';

import { todoReducer } from './todoReducer';

import './styles.css';
import { useForm } from '../../hooks/useForm';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];

  // return [
  //   {
  //     id: new Date().getTime(),
  //     title: 'Learn react DOM',
  //     description: 'programming with create-react-app',
  //     done: false,
  //   },
  // ];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [formValues, handleInputChange, reset] = useForm({
    title: '',
    description: '',
  });

  const { title, description } = formValues;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    const action = {
      type: 'toggle',
      payload: todoId,
    };

    dispatch(action);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      title,
      description,
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

  return (
    <div>
      <h1>Todo App {todos.length}</h1>
      <hr />

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

        <button
          type='submit'
          className='btn btn-outline-success btn-block mt-2'
        >
          Add ToDo
        </button>
      </form>

      <ul className='list-group mt-4 container'>
        <h3 className='text-center'>ToDo List</h3>

        {todos.map((todo, index) => (
          <li key={todo.id} className='list-group-item'>
            <div className='row'>
              <p
                className={`${todo.done ? 'complete' : ''} col-8`}
                onClick={() => handleToggle(todo.id)}
              >
                {index + 1}. {todo.title}
              </p>
              <button
                className='btn btn-outline-danger col-4'
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
