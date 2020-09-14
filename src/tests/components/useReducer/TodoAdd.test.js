import { shallow } from 'enzyme';
import React from 'react';
import TodoAdd from '../../../components/useReducer/TodoAdd';
import '@testing-library/jest-dom';

describe('Testing to <TodoAdd />', () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test('should show succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should not call handleAddTodo', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('should have been called handleAddTodo function', () => {
    const title = 'learn Nest.js';
    const description = 'Framework de Node.js';

    wrapper
      .find('input')
      .at(0)
      .simulate('change', {
        target: {
          value: title,
          name: 'title',
        },
      });

    wrapper
      .find('input')
      .at(1)
      .simulate('change', {
        target: {
          value: description,
          name: 'description',
        },
      });

    const formSubmit = wrapper.find('form').prop('onSubmit');

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    // expect(handleAddTodo).toBeCalledWith(expect.any(Object)); // {}
    expect(handleAddTodo).toBeCalledWith({
      id: expect.any(Number),
      title,
      description,
      done: false,
    });
    expect(wrapper.find('input').at(0).prop('value')).toBe('');
    expect(wrapper.find('input').at(1).prop('value')).toBe('');
  });
});
