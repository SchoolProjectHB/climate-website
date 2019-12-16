import React, { Component } from "react";
import MyBarChart from "./FossilStats";
import "semantic-ui-css/semantic.min.css";
import fossilimage from "./fossilimage.png";
import siggefossil from "./siggefossil.png";


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
                <p>
                  Bensin, diesel, olja, naturgas och kol är exempel på fossila
                  bränslen. Dessa fossila bränslena används till fordon, kol och
                  oljekraftverk. När fossila bränslen används, släpper de ut
                  gaser som skadar luften. 
                  <br></br>
                  <br></br>
                  Några fossila bränslen är:
                  svaveldioxid, kväveoxider och koldioxid (CO2). Alla dessa
                  bränslen bidrar till den globala uppvärmningen.
                </p>

                <img src={fossilimage} class="fossilimage" alt="clothes hanging to dry"></img>

              </div>
            </div>

            <div className="box col-sm">
              <h4>Vad är fossila bränslen?</h4>
              <p>
                Gasbränsle: Gasbränslen är ett samlingsnamn för bränslen som är
                i gasform. Exempel på gasbränslen är: biogas, naturgas, gasol
                och vätgas. 
              </p>
                <p> 
                Flytande bränsle: Flytande bränsle är en vätska som
                innehåller mycket energi. Exempel på flytande bränslen är:
                bensin, diesel, etanol och biodiesel. 
                </p>
                <p> 

                Fasta bränslen: Fast
                bränsle är olika former av fast material som kan brännas för att
                frigöra energi, vilket ger värme och ljus genom
                förbränningsprocessen. Vanliga exempel på fasta bränslen är trä,
                kol och träpellets. 
                </p>
                <p> 
                Cement: Cement är det som används för att
                bygga byggnader. Cementindustrin är en av de två största
                producenterna av koldioxid (CO 2 ) och skapar upp till 8% av de
                globala konstgjorda utsläppen av denna gas, varav 50% kommer
                från den kemiska processen och 40% från brinnande bränsle.
              </p>
            </div>

            <div className="boxsigge col-sm">
            <img src={siggefossil} class="siggefossil" alt="sigge info."></img>
              
            </div>
          </div>
          <div className="row">
            <div className="box col-sm">
              <div className="App">
                <h1>Statistik över fossila utsläpp</h1>

         <p className="descriptionCo2">co2</p>

                <MyBarChart
                  CO2Emission={this.state.CO2Emission}
                  onYearFilter={this.handleYearFilter}
                ></MyBarChart>

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
