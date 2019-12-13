import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Switch, Route } from 'react-router-dom'; 
import FossilFuel from './statistic/FossilFuels';
import GlobalTemp from './statistic/GlobalTemp';
import Glacier from './statistic/Glacier';
import SeaLevel from './statistic/SeaLevel';
import { Link } from "react-router-dom";


//import ReactDOM from "react-dom";
//import AngryJoe from '../layouts/AngryJoe'
//import * as statistic from './statistic';

class Klimatforandringar extends Component { 
  render() {
    return (
      <div>
      <div class="climateButton">  
        <Link to="/statistic/FossilFuels"><button class="fossilButton">Fossila Bränslen</button></Link>
        <Link to="/statistic/Glacier"><button class="glacierButton">Glaciärer</button></Link>
        <Link to="/statistic/GlobalTemp"><button class="tempButton">Globala Temperaturer</button></Link>
        <Link to="/statistic/SeaLevel"><button class="seaButton">Havsnivåer</button></Link>
        </div>
      <Switch>
           <Route path="/statistic/FossilFuels" component={FossilFuel}/>
           <Route path="/statistic/Glacier" component={Glacier}/>
           <Route path="/statistic/GlobalTemp" component={GlobalTemp}/>
           <Route path="/statistic/SeaLevel" component={SeaLevel}/>
          
        </Switch>
        </div>
      
    );
  }
}

//class Klimatforandringar extends Component {
  //  state = {
    //  selectedCardType: ''
    //};
  
  
    //render(){
      //return (
        //<Fragment>
       
      //  <section className="app-section container">
        //  {this.renderCardSelector()}

          //<div className="top-margin-small">
            //{this.renderSelectedCard(this.state.selectedCardType)}
          //</div>
        //</section>
      //</Fragment>
    //);
  //}
  
    //renderCardSelector() {
      //return (
        
          //<select className="ui dropdown"onChange={(e) => this.setState({ selectedCardType: e.target.value })}>
         //<input type="active" name="Kategori">
          // </input>
           //<option value="0">Välj en kategori</option>
            //<option value="CardA">Fossila Bränslen</option>
            //<option value="CardB">Globala Temperaturer</option>
            //<option value="CardC">Glaciärer</option>
            //<option value="CardD">Havsnivåer</option>
          //</select>
      //);
    //}

    //renderSelectedCard(selectedCardType) {
      //  if (!selectedCardType)
        //  return <AngryJoe text="Välj en kategorii" />;
    //if(selectedCardType==="0")
    //return; 
      //  const Card = statistic[selectedCardType];
    
   //     return <Card />;
     // }

//}
  
 
//const rootElement = document.getElementById("root");
//ReactDOM.render(<Klimatforandringar />, rootElement);

export default Klimatforandringar;