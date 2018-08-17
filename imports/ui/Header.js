import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
        <Link to='/' className="cc-header__title">Home</Link>
        <h1>Travel the easy way!</h1>
        <div>
          <img className="cc-header-logo" src={'./assets/img/logo.png'} width={500} height={300} />
        </div>
        <div className="cc-header__registration">
          <Link to='/login' className="cc-header__links">Login</Link>
          <Link to='/register' className="cc-header__links">Sign Up</Link>
         </div> 
    </nav>
  </header>
)

export default Header;
