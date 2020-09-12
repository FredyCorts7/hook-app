import React from 'react';
import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../../components/examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
import '@testing-library/jest-dom';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Testing to <MultipleCustomHooks />', () => {
  useCounter.mockReturnValue({
    counter: 0,
    increment: () => {},
  });

  test('should be the same component in initial state', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should show information', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Camila',
          quote: 'Everybody ignore to me',
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert').exists()).toBeFalsy();
    expect(wrapper.find('.mb-0').text().trim()).toBe('Everybody ignore to me');
    expect(wrapper.find('footer').text().trim()).toBe('Camila');
  });
});
