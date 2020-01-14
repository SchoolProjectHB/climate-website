import React, { Component } from "react";
import startsida from "../images/homepage8.gif";
import { Link } from "react-router-dom";

class Start extends Component {
  render() {
    return (
      <div class="containerStart">
        <img src={startsida} width="100%" />
        <Link to="/statistic/FossilFuels">
          <button className="test-knapp">
            Klicka här för att komma igång!
          </button>
        </Link>
      </div>
    );
  }
}

export default Start;
