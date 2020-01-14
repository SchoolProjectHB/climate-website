import React from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
<nav className="navbar">
  <Link to="/climate-website">
   <img src={logo} class="logo" alt="logo"/>

  </Link>

</nav>
    );
}

export default Navbar;