import React from 'react';
import logo from '../../logo.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand ml-5" to="/">
  <img src={logo} alt="logo" style={{ width: '90px' }}/>
  <span className="sr-only">(current)</span></Link>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link text-black text-uppercase ml-5" to="/klimatforandringar">Klimatförändringar</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-black text-uppercase ml-5" to="/ordlista">Ordlista</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-black text-uppercase ml-5" to="/omoss">Om oss</Link>
      </li>
    </ul>
  </div>
</nav>
    );
}

export default Navbar;