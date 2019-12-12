import React, { Component } from "react";
// import { Button } from "semantic-ui-react";
import startsida from "../images/startsida.png";
//import sigge from "../images/sigge.png";

class Start extends Component {
    render() {
      return (

       <div class="containerStart">
        <img src={startsida} width="100%"/>
        <a href="/Klimatforandringar"><button class="huge ui button">Klicka här för att komma igång!</button></a>
        </div>
       

      );
    }
}

    export default Start;