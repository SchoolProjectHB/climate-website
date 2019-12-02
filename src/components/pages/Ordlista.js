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
                  Item 4
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-7"
                >
                  Item 4
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
            <h4 id="list-item-6">Item 4</h4>
            <p>...</p>
            <h4 id="list-item-7">Item 4</h4>
            <p>...</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Ordlista;
