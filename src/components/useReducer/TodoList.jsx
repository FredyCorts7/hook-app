import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className='list-group mt-4 container'>
      <h3 className='text-center'>ToDo List</h3>

      {todos.map((todo, index) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={index}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
};

export default TodoList;
