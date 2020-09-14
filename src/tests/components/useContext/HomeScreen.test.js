import React from 'react';
import { mount, shallow } from 'enzyme';
import HomeScreen from '../../../components/useContext/HomeScreen';
import { UserContext } from '../../../components/useContext/UserContext';
import '@testing-library/jest-dom';

describe('Testing to <HomeScreen />', () => {
  const user = {
    name: 'Camila',
    email: 'cami@gmail.com',
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test('should show succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
