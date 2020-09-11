import React from 'react';
import { shallow } from 'enzyme';
import HookApp from '../HookApp';
import '@testing-library/jest-dom';

describe('Testing to <HookApp />', () => {
  test('should show successful', () => {
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
