import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import startsida from "../images/startsida.png";

class Start extends Component {
    render() {
      return (
      // <button class="huge ui button">
      //   Knapp
      // </button>
        
        <img src={startsida}/>

      );
    }
}

    export default Start;