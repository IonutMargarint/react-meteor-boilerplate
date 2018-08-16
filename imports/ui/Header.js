import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <h1>Hello, new React/Meteor app!</h1>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Sign Up</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;