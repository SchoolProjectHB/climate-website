import React, { Component } from "react";
import MyBarChartGlacier from "./GlacierStats";
import "semantic-ui-css/semantic.min.css";

//import './cardA.css';

class App extends Component {
  state = {
    CO2Emission: []
    //searchedYear:[],
    //indexYear: 0,
    //yearFrom: 0,
    //yearTo: 0
  };

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ CO2Emission: data });
  }

  render() {
    return (
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="box col-sm">
              <div>
                <h4>Glaciärer</h4>
                <p>
                  En glaciär är en stor massa av is och snö, och innehåller
                  jordens största resurs av sötvatten. Cirka tio procent av
                  jordens yta är täckt av glaciärer, och dessa finns i alla
                  världsdelar förutom från Australien. Hela 97% av glaciärerna
                  finns på Antarktis och Grönland. På grund av ökad global
                  temperatur börjar glaciärerna att smälta. Om alla glaciärer på
                  Grönland och Antarktis skulle smälta stiger havsnivån ungefär
                  80 meter. Det skulle innebära att städer som New York och
                  Tokyo skulle hamna under vatten.
                </p>
              </div>
            </div>

            <div className="box col-sm">
              <h4>Ordlista</h4>
              <p>Text text</p>
            </div>
          </div>
          <div className="row">
            <div className="box col-sm">
              <div className="App">
                <h1>Statistik över glaciärernas storlek </h1>
                <MyBarChartGlacier
                  CO2Emission={this.state.CO2Emission}
                ></MyBarChartGlacier>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
