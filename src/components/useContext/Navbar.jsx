import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <NavLink to='/' className='navbar-brand'>
        Navbar
      </NavLink>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink exact activeClassName='active' to='/' className='nav-link'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              activeClassName='active'
              to='/about'
              className='nav-link'
            >
              About
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              activeClassName='active'
              to='/login'
              className='nav-link'
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
