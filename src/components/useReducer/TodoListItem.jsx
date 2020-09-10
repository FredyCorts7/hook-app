import React from 'react';

const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
    <li className='list-group-item'>
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
  );
};

export default TodoListItem;
