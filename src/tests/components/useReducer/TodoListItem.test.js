import React from 'react';
import { shallow } from 'enzyme';
import TodoListItem from '../../../components/useReducer/TodoListItem';
import '@testing-library/jest-dom';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Testing to <TodoListItem />', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const index = 0;

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={index}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('should to show succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should to call the handleDelete function', () => {
    wrapper.find('button').simulate('click');

    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('should to call the handleToggle function', () => {
    wrapper.find('p').simulate('click');

    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('should to show correctly paragraph content', () => {
    const receivedText = wrapper.find('p').text();

    expect(receivedText).toBe(`${index + 1}. ${demoTodos[0].title}`);
  });

  test('should have the complete class if Todo.done is true', () => {
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(<TodoListItem todo={todo} index={0} />);

    expect(wrapper.find('p').hasClass('complete')).toBeTruthy();
  });
});
