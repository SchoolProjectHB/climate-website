import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <div className="divlogo">
        <Link to="/climate-website">
          <img src={logo} class="logo" alt="logo" />
        </Link>
      </div>
  );
}

export default Navbar;
