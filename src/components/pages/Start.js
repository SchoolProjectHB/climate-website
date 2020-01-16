import React, { Component } from "react";
<<<<<<< HEAD
// import { Button } from "semantic-ui-react";
import startsida from "../images/firstpage.gif";
//import sigge from "../images/sigge.png";
=======
import startsida from "../images/homepage8.gif";
>>>>>>> 711ec93eb5b597f46948e2c73ea36c1fced0f901
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
