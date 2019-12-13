import React, { Component } from "react";
// import { Button } from "semantic-ui-react";
import startsida from "../images/startsida.png";
//import sigge from "../images/sigge.png";
import { Link } from "react-router-dom";


class Start extends Component {
    render() {
      return (

       <div class="containerStart">
        <img src={startsida} width="100%"/>
        {/* <a href="./statistic/FossilFules"><button className="test-knapp">Klicka här för att komma igång!</button></a> */}
        <Link to="/statistic/FossilFuels"><button className="test-knapp">Klicka här för att komma igång!</button></Link>

        </div>
       

      );
    }
}

    export default Start;