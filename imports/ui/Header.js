import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
    <Link to='/'>Home</Link>
      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Sign Up</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;