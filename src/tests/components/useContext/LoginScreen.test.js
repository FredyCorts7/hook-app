import React from 'react';
import { mount, shallow } from 'enzyme';
import LoginScreen from '../../../components/useContext/LoginScreen';
import '@testing-library/jest-dom';
import { UserContext } from '../../../components/useContext/UserContext';

describe('Testing to <LoginScreen />', () => {
  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('should show succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should run setUser function with expected argument', () => {
    wrapper.find('button').simulate('click');

    expect(setUser).toHaveBeenCalledWith({
      id: 1234,
      name: 'Camila',
    });
  });
});
