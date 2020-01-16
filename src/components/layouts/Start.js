import React, { Component } from "react";
import startsida from "../images/firstpage.gif";
import { Link } from "react-router-dom";

class Start extends Component {
  render() {
    return (
      <div class="containerStart">
        <img src={startsida} width="100%" alt="peaceful town" />
        <Link to="/statistic/FossilFuels">
          <button className="button">
            Klicka här för att komma igång!
          </button>
        </Link>
      </div>
    );
  }
}

export default Start;
