import React, { Component } from "react";
import MyBarChartGlacier from "./GlacierStats";
import "semantic-ui-css/semantic.min.css";
import glacierimage from "./glacierimage.png";
import siggefossil from "./SiggeGlacier.png";



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
                  En glaciär är en stor massa av is och snö, som innehåller jordens största 
                  resurs av sötvatten. Cirka tio procent av jordens yta är täckt av glaciärer, 
                  och dessa finns i alla världsdelar förutom från Australien.
                  
                  <br></br>
                  <br></br>
                  Hela 97% av glaciärerna finns på Antarktis och Grönland. På grund av ökad global 
                  temperatur börjar glaciärerna att smälta. Det finns totalt sex olika glaciärer.
                  <br></br>
                  <br></br>
                  
                  Om alla glaciärer på Grönland och Antarktis skulle smälta stiger havsnivån ungefär 80 meter.
                  Det skulle innebära att städer som New York och Tokyo skulle hamna under vatten.
                </p>
            <img src={glacierimage} class="fossilimage" alt="clothes hanging to dry"></img>

              </div>
            </div>

            <div className="box col-sm">
              <h4>Ordlista</h4>
              <b>Glaciär:</b><p>En stor massa av is och snö.</p>
              <b>Glaciärens massbalans:</b><p>Balansen mellan ismassor som växer och ismassor som smälter.</p> 
            <b>Olika typer av glaciärer:</b><p>Det finns olika typer av glaciärer, så som toppglaciär, isfält, 
              nischglaciär eller inlandsis. </p>

            <p></p>
            </div>

              <div className="boxsigge col-sm">
            <img src={siggefossil} class="siggefossil" alt="sigge info."></img>
              
            </div>
          </div>
          <div className="row">
            <div className="box col-sm">
              <div className="App">
                <h1>Statistik över glaciärernas storlek </h1>
        <p className="descriptionCo2">m</p>
                <MyBarChartGlacier
                  CO2Emission={this.state.CO2Emission}
                ></MyBarChartGlacier>
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
