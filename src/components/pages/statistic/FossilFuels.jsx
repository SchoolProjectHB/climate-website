import React, { Component } from 'react';
import MyBarChart from "./FossilStats";
import 'semantic-ui-css/semantic.min.css'

//import './cardA.css';

class App extends Component{
  
  state = {
    CO2Emission: [],
    //searchedYear:[],
    indexYear: 250,
    //yearFrom: 0,
    //yearTo: 0
   
  };

    async componentDidMount() {
    const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ CO2Emission: data});
  }


render() {
  
  return (
  
    <div className="App">
      <h1>Statistik över de fossila utsläppen</h1>
      <MyBarChart CO2Emission={this.state.CO2Emission}
      onYearFilter={this.handleYearFilter}
      ></MyBarChart>
      </div>  

      
);
  }}

  export default App;