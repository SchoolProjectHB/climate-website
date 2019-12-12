import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'

//import ReactDOM from "react-dom";
//import AngryJoe from '../layouts/AngryJoe'
//import * as statistic from './statistic';

class NavBar2 extends Component { 
  render() {
    return (
      <div class="Start">  
        <a href="/statistic/FossilFuels"><button class="small ui button">Fossila Bränslen</button></a>
        <a href="/statistic/GlobalTemp"><button class="small ui button">Globala Temperaturer</button></a>
        <a href="/statistic/Glacier"><button class="small ui button">Glaciärer</button></a>
        <a href="/statistic/SeaLevel"><button class="small ui button">Havsnivåer</button></a>
        </div>
    );
  }
}
export default NavBar2;