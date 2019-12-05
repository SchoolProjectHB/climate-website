import React, { Component } from 'react';
import MyBarChartGlobal from "./GlobalStats";
import 'semantic-ui-css/semantic.min.css'

//import './cardA.css';

class App extends Component{
  
  state = {
    globalEmission: [],
    //searchedYear:[],
    indexYear: 250,
    //yearFrom: 0,
    //yearTo: 0
   
  };

    async componentDidMount() {
    const url = "https://my.api.mockaroo.com/temp.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ globalEmission: data});
  }


render() {
  
  return (
  
    <div className="App">
      <h1>Statistik över de globala temperaturerna</h1>
      <MyBarChartGlobal globalEmission={this.state.globalEmission[this.state.indexYear]}
      onYearFilter={this.handleYearFilter}
      ></MyBarChartGlobal>
      </div>  

      
);
  }}

  export default App;