import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../../components/useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';
import '@testing-library/jest-dom';

describe('Testing to <TodoList />', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('should show succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have 2 <TodoListItem />', () => {
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(
      expect.any(Function)
    );
  });
});
