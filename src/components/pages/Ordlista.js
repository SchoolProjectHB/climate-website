import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import Container from 'react-bootsrtap/Container';
// import Row from 'react-bootsrtap/Row';
// import Col from 'react-bootsrtap/Col';

class Ordlista extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div>

              <div id="list-example" className="list-group">
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-1"
                >
                  Miljöförändringar
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-2"
                >
                  CO2-utsläpp och fossila bränslen
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-3"
                >
                  Globala temperaturer
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-4"
                >
                  Glaciärer
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-5"
                >
                  Havsnivåer
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-6"
                >
                  Gas Fuel
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-7"
                >
                  Liquid Fuel
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-8"
                >
                  Solid Fuel
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-9"
                >
                  Cement
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-10"
                >
                  Gas Flaring
                </a>
              </div>


              <div
                data-spy="scroll"
                data-target="#list-example"
                data-offset="0"
                class="scrollspy-example"
              ></div>
            </div>
          </div>

          <div className="col-sm mt-15 mb-15">
            <h4 id="list-item-1">Miljöförändringar</h4>
            <p>
              Klimatet har alltid förändrats, men på grund av människans
              livsstil ökar den globala temperaturen snabbare än tidigare. Detta
              då människan bland annat kör bil, flyger och äter mat som är dålig
              för klimatet, som kött och varor som transporterats långt.
            </p>
            <h4 id="list-item-2">CO2-utsläpp och fossila bränslen</h4>
            <p>
              Fossila bränslen är exempelvis bensin, diesel, olja, naturgas och
              kol. När fossila bränslen används till bland annat fordon eller
              industrin bildas CO2 (koldioxid). Detta är dåligt för jordens
              atmosfär, då växthuseffekten ökar.
            </p>
            <h4 id="list-item-3">Globala temperaturer</h4>
            <p>
              Den globala genomsnittstemperaturen, det vill säga
              medeltemperaturen, har stigit. Det finns allvarliga konsekvenser
              av den globala uppvärmningen, då bland annat glaciärer smälter och
              havsnivån ökar.
            </p>
            <h4 id="list-item-4">Glaciärer</h4>
            <p>
              En glaciär är en stor massa av is och snö, och innehåller jordens
              största resurs av sötvatten. Cirka tio procent av jordens yta är
              täckt av glaciärer, och dessa finns i alla världsdelar bortsett
              från Australien. Hela 97% av glaciärerna finns på Antarktis och
              Grönland. På grund av ökad global temperatur börjar glaciärerna
              att smälta.
            </p>
            <h4 id="list-item-5">Havsnivåer</h4>
            <p>
              Den globala havsnivån stiger, vilket beror på att temperaturen i
              luften stiger, som en konsekvens av att glaciärerna smälter. Även
              om växthusgasutsläppen skulle minska drastiskt, kommer havsnivån
              att fortsätta stiga. Detta då halten koldioxid i atmosfären redan
              är så hög.
            </p>
            <h4 id="list-item-6">Gas Fuel</h4>
            <p>är ett samlingsnamn för bränslen som vid användningen är i gasform.
               Till dessa hör till exempel biogas, naturgas, gasol och vätgas
            </p>
            <h4 id="list-item-7">Liquid Fuel</h4>
            <p>De flesta flytande bränslen i ingår i kategorin fossila bränslen. 
              Exempel på flytande bränslen är, bensin, etanol och biodiesel.
            </p>
            <h4 id="list-item-8">Solid Fuel</h4>
            <p>Fast bränsle är olika former av fast material som kan brännas för 
              att frigöra energi, vilket ger värme och ljus genom förbränningsprocessen. 
              Vanliga exempel på fasta bränslen är trä, kol och träpellets.
            </p>
            <h4 id="list-item-9">Cement</h4>
            <p>Cementindustrin är en av de två största producenterna av koldioxid 
              (CO 2 ) och skapar upp till 8% av de globala konstgjorda utsläppen 
              av denna gas, varav 50% kommer från den kemiska processen och 40% 
              från brinnande bränsle.
            </p>
            <h4 id="list-item-10">Gas Flaring</h4>
            <p>Gasfackling är en industriprocess som innebär att bränna överskottsgas 
              på oljefält, i raffinaderier eller vid fabriker. Bränningen sker oftast 
              enbart för att elda upp gasen. Värmeenergin tas inte tillvara.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Ordlista;
