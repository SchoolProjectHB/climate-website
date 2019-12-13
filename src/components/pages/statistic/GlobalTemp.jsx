import React, { Component } from "react";
import MyBarChartGlobal from "./GlobalStats";
import "semantic-ui-css/semantic.min.css";

//import './cardA.css';

class App extends Component {
  state = {
    globalEmission: [],
    //searchedYear:[],
    indexYear: 250
    //yearFrom: 0,
    //yearTo: 0
  };

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/temp.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      globalEmission: data.sort((a, b) =>
        a.Year > b.Year ? 1 : b.Year > a.Year ? -1 : 0
      )
    });
  }

  render() {
    return (
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="box col-sm">
              <div>
                <h4>Globala temp.</h4>
                <p>
                  Global uppvärmning är en ökning av jordens medeltemperatur som
                  orsakas av den ökade utsläppen av växthusgaser från mänskliga
                  aktiviteter.{" "}
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
                <h1>Statistik över den globala temperaturen</h1>
                <MyBarChartGlobal
                  globalEmission={this.state.globalEmission}
                  onYearFilter={this.handleYearFilter}
                ></MyBarChartGlobal>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
