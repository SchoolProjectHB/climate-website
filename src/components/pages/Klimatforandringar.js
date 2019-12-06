import React, { Fragment, Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import ReactDOM from "react-dom";
import AngryJoe from '../layouts/AngryJoe'
import * as statistic from './statistic';
class Klimatforandringar extends Component {
    state = {
      selectedCardType: ''
    };
  
  
    render(){
      return (
        <Fragment>
       
        <section className="app-section container">
          {this.renderCardSelector()}

          <div className="top-margin-small">
            {this.renderSelectedCard(this.state.selectedCardType)}
          </div>
        </section>
      </Fragment>
    );
  }

    renderCardSelector() {
      return (
        
          <select className="ui dropdown"onChange={(e) => this.setState({ selectedCardType: e.target.value })}>
         <input type="active" name="Kategori">
           </input>
           <option value="0">Välj en kategori</option>
            <option value="CardA">Fossila Bränslen</option>
            <option value="CardB">Globala Temperaturer</option>
            <option value="CardC">Glaciärer</option>
            <option value="CardD">Havsnivåer</option>
          </select>
      );
    }

    renderSelectedCard(selectedCardType) {
        if (!selectedCardType)
          return <AngryJoe text="Välj en kategorii" />;
    if(selectedCardType==="0")
    return; 
        const Card = statistic[selectedCardType];
    
        return <Card />;
      }

}
  
 
const rootElement = document.getElementById("root");
ReactDOM.render(<Klimatforandringar />, rootElement);

export default Klimatforandringar;