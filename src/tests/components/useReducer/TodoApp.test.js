import React from 'react';
import { mount, shallow } from 'enzyme';
import TodoApp from '../../../components/useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Testing to <TodoApp />', () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn(() => {});

  test('should show succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should add Todo', () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });

    expect(wrapper.find('h1').text()).toBe(`Todo App ${2}`);
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test('should delete Todo', () => {
    wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
    wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

    expect(wrapper.find('h1').text()).toBe(`Todo App ${0}`);
  });
});
