import React, { Component } from "react";
import MyBarChartGlacier from "./MyBarChartGlacier";
import "semantic-ui-css/semantic.min.css";
import glacierimage from "./statistic-images/glacierimage.png";
import siggefossil from "./statistic-images/SiggeGlacier.png";

class Glacier extends Component {
  state = {
    GlacierEmission: []
  };

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ GlacierEmission: data });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="box col-sm">
            <div>
              <h4>Glaciärer</h4>
              <p>
                En glaciär är en stor massa av is och snö, som innehåller
                jordens största resurs av sötvatten. Cirka tio procent av
                jordens yta är täckt av glaciärer, och dessa finns i alla
                världsdelar förutom i Australien.
                <br></br>
                <br></br>
                Hela 97% av glaciärerna finns på Antarktis och Grönland. På
                grund av ökad global temperatur börjar glaciärerna att smälta.
                <br></br>
                <br></br>
                Om alla glaciärer på Grönland och Antarktis skulle smälta stiger
                havsnivån med ungefär 80 meter. Det skulle innebära att många
                städer, exempelvis New York och Tokyo, skulle hamna under
                vatten.
              </p>
              <img src={glacierimage} class="glacierimage" alt="glacier"></img>
            </div>
          </div>

          <div className="box col-sm">
            <h4>Ordlista</h4>
            <b>Glaciär:</b>
            <p>En stor massa av is och snö.</p>
            <b>Glaciärens massbalans:</b>
            <p>Balansen mellan ismassor som växer och ismassor som smälter.</p>
            <b>Olika typer av glaciärer:</b>
            <p>
              Det finns olika typer av glaciärer, så som toppglaciär, isfält,
              nischglaciär eller inlandsis.{" "}
            </p>

            <p></p>
          </div>

          <div className="boxsigge col-sm">
            <img src={siggefossil} class="siggefossil" alt="sigge info."></img>
          </div>
        </div>
        <div className="row">
          <div className="box-graph col-sm">
            <div className="App">
              <h1>Statistik över glaciärernas storlek </h1>
              <p className="descriptionCo2">m</p>
              <MyBarChartGlacier
                GlacierEmission={this.state.GlacierEmission}
              ></MyBarChartGlacier>
              <p className="descriptionYear">År</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Glacier;
