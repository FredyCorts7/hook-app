import React, { useReducer, useEffect } from 'react';

import { todoReducer } from './todoReducer';

import './styles.css';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

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

  const handleAddTodo = (newTodo) => {
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

      <TodoAdd handleAddTodo={handleAddTodo} />

      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </div>
  );
};

export default TodoApp;
