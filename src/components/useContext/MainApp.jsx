import React from 'react';
import AppRouter from './AppRouter';
import { UserContext } from './UserContext';

const MainApp = () => {
  const user = {
    id: 123,
    name: 'Fredy C',
    email: 'fred.cor.14@gmail.com',
  };

  return (
    <UserContext.Provider value={user}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
