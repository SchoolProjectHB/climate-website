import React, { Component } from "react";
import MyBarChart from "./MyBarChartFossil";
import "semantic-ui-css/semantic.min.css";
import fossilimage from "./statistic-images/fossilimage.png";
import siggefossil from "./statistic-images/SiggeFossilaBranslen.png";

class FossilFules extends Component {
  state = {
    FossilEmission: [],
    indexYear: 0
  };

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ FossilEmission: data });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="box col-sm">
            <div>
              <h4>Fossila bränslen</h4>
              <p>
                Bensin, diesel, olja, naturgas och kol är exempel på fossila
                bränslen. Dessa används bland annat till fordon, kol och
                oljekraftverk. När fossila bränslen används släpper de ut gaser
                som skadar luften.
                <br></br>
                <br></br>
                Några fossila bränslen är svaveldioxid, kväveoxider och
                koldioxid (CO2). Alla dessa bränslen bidrar till den globala
                uppvärmningen.
              </p>

              <img
                src={fossilimage}
                class="fossilimage"
                alt="factory with smoke"
              ></img>
            </div>
          </div>

          <div className="box col-sm">
            <h4>Ordlista</h4>
            <b>Gasbränsle:</b>
            <p>
              Gasbränslen är bränslen som är i gasform. Exempel på gasbränslen
              är biogas, naturgas, gasol och vätgas.
            </p>
            <b>Flytande bränsle:</b>
            <p>
              {" "}
              Flytande bränsle är en vätska som innehåller mycket energi.
              Exempel på flytande bränslen är bensin, diesel och etanol.
            </p>
            <b>Fasta bränslen:</b>
            <p>
              {" "}
              Fasta bränslen är olika former av fast material som kan brännas.
              Detta kan till exempel vara trä, kol eller träpellets.
            </p>
            <b>Cement:</b>{" "}
            <p>
              {" "}
              Cement används bland annat för att bygga byggnader.
              Cementindustrin bidrar till stora utsläpp av koldioxid (CO2).
            </p>
          </div>

          <div className="boxsigge col-sm">
            <img src={siggefossil} class="siggefossil" alt="sigge info."></img>
          </div>
        </div>
        <div className="row">
          <div className="box-graph col-sm">
            <div className="App">
              <h1>Statistik över fossila utsläpp</h1>

              <p className="descriptionCo2">co2</p>

              <MyBarChart
                FossilEmission={this.state.FossilEmission}
                onYearFilter={this.handleYearFilter}
              ></MyBarChart>

              <p className="descriptionYear">År</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FossilFules;
