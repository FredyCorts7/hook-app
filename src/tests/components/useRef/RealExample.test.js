import React from 'react';
import { shallow } from 'enzyme';
import RealExample from '../../../components/useRef/RealExample';
import '@testing-library/jest-dom';

describe('Testing to <RealExample />', () => {
  test('should show succesfully', () => {
    const wrapper = shallow(<RealExample />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBeFalsy();
    expect(wrapper.find('button').text()).toBe('Show');
  });

  test('should show <MultipleCustomHooks />', () => {
    const wrapper = shallow(<RealExample />);
    wrapper.find('button').simulate('click');

    expect(wrapper.find('MultipleCustomHooks').exists()).toBeTruthy();
    expect(wrapper.find('button').text()).toBe('Hide');
  });
});
