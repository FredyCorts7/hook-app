import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>About Screen</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button className='btn btn-outline-success' onClick={() => setUser({})}>
        Log Out
      </button>
    </div>
  );
};

export default AboutScreen;
