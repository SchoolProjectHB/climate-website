import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Omoss extends Component {
    render() {
      return (

        
      <div className="container">
      <h1> Om oss </h1>
        <div className="row">
          <div className="omOss-sida col-sm">
            <div>
                <h4>Smartare utbildning</h4>
                <p>
                  Smartare Utbildning är ett företag med klimat i fokus. Vår
                  mission är att bidra till ökad kunskap om miljön och
                  miljöförändringar. Detta tror vi kan leda till en grönare, och
                  mer hållbar framtid. Våra lokaler finner ni i centrala
                  Göteborg, där för närvarande 14 personer jobbar. Där arbetar
                  vi dagligen för att ni som elever ska få de bästa
                  förutsättningarna att kunna lära er mer om vårt klimat.
                </p>
            </div>
          </div>

          <div className="omOss-sida col-sm">
            <h4>Kontakt</h4>
            <p>
              Vi brinner för klimatet och för att få dela med oss av vår
              kunskap. Tveka inte på att höra av dig till oss på Smartare Utbildning. <br />
              <br />
              Smartare Utbildning
              <br />
              +46700000000
              <br />
              kontakt@smartareutbildning.se
              <br />
            </p>
          </div>
        </div>

        <div className="row">
          <div className="omOss-sida col-sm">
            <div>
                <h4>Så jobbar vi</h4>
                <p>
                  Smartare Utbildning vill sprida kunskap till elever om de
                  pågående klimatförändringarna. Vi tycker att lärande ska vara
                  roligt och intressant, och bidra till en ökad vilja av att
                  lära sig mer.
                </p>
            </div>
          </div>

          <div className="omOss-sida col-sm"> 
            <h4>Om applikationen</h4>
            <p>
              Applikationen är till för dig som går på Guldhedsskolan, i årskurs
              6-9. Den är ett verktyg för att du ska lära dig mer om
              klimatförändringar, genom att ta del av information och jämföra
              klimatdata.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Omoss;
