import React, { Component } from "react";
import MyBarChart from "./FossilStats";
import "semantic-ui-css/semantic.min.css";
// import Ordlista from '../components/pages/Ordlista';

class App extends Component {
  state = {
    CO2Emission: [],
    indexYear: 0
  };

  


  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
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
                <h4>Fossila utsläpp</h4>
              <p>Text text</p>
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
        <h1>Statistik över fossila utsläpp</h1>

          <MyBarChart
            CO2Emission={this.state.CO2Emission}
            onYearFilter={this.handleYearFilter}
          ></MyBarChart>
        </div>
        </div>

          </div>
        </div>


      </div>
    );
  }
}

export default App;
