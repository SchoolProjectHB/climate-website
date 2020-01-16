import React, { Component } from "react";
import MyBarChartSeaLevel from "./SeaLevelStats";
import "semantic-ui-css/semantic.min.css";
import siggefossil from "./SiggeHavsnivaer.png";
import seaimage from "./seaimage.png";

//import './cardA.css';

class App extends Component {
  state = {
    SeaLevelEmission: [],
    //searchedYear:[],
    indexYear: 0
    //yearFrom: 0,
    //yearTo: 0
  };

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ SeaLevelEmission: data });
  }

  render() {
    return (
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="box col-sm">
              <div>
                <h4>Havsnivåer</h4>
                <p>
                  Konsekvensen av att medeltemperaturen ökar, är att glaciärerna
                  smälter. Om alla glaciärer på Grönland och Antarktis skulle
                  smälta stiger havsnivån ungefär 80 meter. Det innebär att
                  många städer, som New York eller Tokyo, skulle hamna under
                  vatten.
                  <br></br>
                  <br></br>
                  Statistik på den globala medelhavsnivån uppdateras varannan
                  månad, och hämtas från NASA/NCES.{" "}
                </p>
                <img
                  src={seaimage}
                  class="seaimage"
                  alt="clothes hanging to dry"
                ></img>
              </div>
            </div>

            <div className="box col-sm">
              <h4>Ordlista</h4>
              <b>Global Uppvärmning:</b>
              <p>En ökning av jordens medeltemperatur. </p>
              <b>Glaciär:</b>
              <p>En stor massa av is och snö.</p>
              <b>NASA:</b>
              <p>USA:S myndighet för luft- och rymdfart.</p>
              <b>NCES:</b>
              <p>
                NCES står för National Center for Education Statistic. De
                samlar in och analyserar statistik.{" "}
              </p>
            </div>
            <div className="boxsigge col-sm">
              <img
                src={siggefossil}
                class="siggefossil"
                alt="sigge info."
              ></img>
            </div>
          </div>
          <div className="row">
            <div className="box col-sm">
              <div className="App">
                <h1>Statistik över havsnivåerna</h1>
                <p className="descriptionCo2">m</p>

                <MyBarChartSeaLevel
                  SeaLevelEmission={this.state.SeaLevelEmission}
                ></MyBarChartSeaLevel>
                <p className="descriptionYear">År</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
