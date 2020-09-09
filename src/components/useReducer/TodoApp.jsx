import React, { useReducer } from 'react';

import { todoReducer } from './todoReducer';

import './styles.css';

const initialState = [
  {
    id: new Date().getTime(),
    title: 'Learn react DOM',
    description: 'programming with create-react-app',
    done: false,
  },
];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  console.table(todos);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      title: 'new Task',
      description: 'anything',
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo,
    };

    dispatch(action);
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
        />

        <input
          type='text'
          name='description'
          placeholder='ex. about that ...'
          className='form-control'
          autoComplete='off'
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
              <p className='text-center col-8'>
                {index + 1}. {todo.title}
              </p>
              <button className='btn btn-outline-danger col-4'>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
