import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const newUser = {
    id: 1234,
    name: 'Camila',
  };

  return (
    <div>
      <h1>Login Screen</h1>
      <hr />

      <button className='btn btn-outline-info' onClick={() => setUser(newUser)}>
        Log In
      </button>
    </div>
  );
};

export default LoginScreen;
