import React from 'react';
import { mount } from 'enzyme';
import AppRouter from '../../../components/useContext/AppRouter';
import { UserContext } from '../../../components/useContext/UserContext';
import '@testing-library/jest-dom';

describe('Testing to <AppRouter />', () => {
  const user = {
    name: 'Maria',
    email: 'mari@gmail.com',
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );

  test('should show succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
