import React, { Component } from "react";
import MyBarChartGlobal from "./MyBarChartGlobal";
import "semantic-ui-css/semantic.min.css";
import tempimage from "./statistic-images/tempimage.png";
import siggetemp from "./statistic-images/SiggeGlobalTemperatur.png";

class GlobalTemp extends Component {
  state = {
    globalTempEmission: [],
    indexYear: 250
  };

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/temp.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      globalTempEmission: data.sort((a, b) =>
        a.Year > b.Year ? 1 : b.Year > a.Year ? -1 : 0
      )
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="box col-sm">
            <div>
              <h4>Globala temperaturer</h4>
              <p>
                Global uppvärmning är en ökning av jordens medeltemperatur, som
                orsakas av den ökade utsläppen av växthusgaser. De senaste
                hundra åren har temperaturen på jorden ökat snabbare än
                någonsin.
                <br></br>
                <br></br>
                Konsekvenserna av att den globala temperaturen ökar är
                allvarliga. Bland annat är en risk att vissa djurarter, så som
                isbjörnarna, utrotas. Detta beror på att glaciärerna de bor på
                smälter bort.{" "}
              </p>
              <img
                src={tempimage}
                class="tempimage"
                alt="earth and thermometer"
              ></img>
            </div>
          </div>

          <div className="box col-sm">
            <h4>Ordlista</h4>
            <b> Atmosfär: </b>
            <p>Runt jorden finns ett lager av gaser som kallas för atmosfär. 
              Atmosfären är det som finns mellan oss på jordytan och världsrymden.</p>
            <b>Växthuseffekten: </b>
            <p>Växthusefftekten kallas det som innebär att växthusgaser i atmosfären håller kvar en
            del av solvärmen och gör att jorden håller en temperatur som vi han leva i. </p>
            <b>Växthusgas:</b>
            <p>
              En gas i atmosfären som fångar in värme. Exempel på växthusgaser
              är koldioxid och metan.
            </p>
            <b>Medeltemperatur:</b>
            <p>Medeltemperatur är den genomsnittliga temperaturen.</p>
          </div>
          <div className="boxsigge col-sm">
            <img src={siggetemp} class="siggefossil" alt="sigge info."></img>
          </div>
        </div>
        <div className="row">
          <div className="box-graph col-sm">
            <div className="App">
              <h1>Statistik över den globala temperaturen</h1>
              <p className="descriptionCo2">C°</p>

              <MyBarChartGlobal
                globalTempEmission={this.state.globalTempEmission}
                onYearFilter={this.handleYearFilter}
              ></MyBarChartGlobal>
              <p className="descriptionYear">År</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GlobalTemp;
