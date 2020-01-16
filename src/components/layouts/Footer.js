import React from "react";

function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-4 col-sm-6 text-white">
              <h3>Smartare utbildning</h3>
              <ul className="list-unstyled text-white">
                <li>
                  Smartare Utbildning är ett företag med klimat i fokus. Vår
                  mission är att bidra till ökad kunskap om miljön och
                  miljöförändringar. Detta tror vi kan leda till en grönare, och
                  mer hållbar framtid.
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-4 col-sm-6 text-white">
              <h3>Om applikationen</h3>
              <ul className="list-unstyled text-white">
                <li>
                  Applikationen är till för dig som går på Guldhedsskolan, i
                  årskurs 6-9. Den är ett verktyg för att du ska lära dig mer om
                  klimatförändringar, genom att ta del av information och
                  jämföra klimatdata.
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-4 col-sm-6 text-white">
              <h3> Kontakta oss </h3>
              <ul className="list-unstyled text-white">
                <li>Smartare Utbildning</li>
                <li>Göteborg</li>
                <li>+46700000000</li>
                <li>kontakt@smartareutbildning.se</li>
              </ul>
            </div>
          </div>
          {/* Footer bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center text-white">
              &copy;{new Date().getFullYear()} Smartare utbildning - All Right
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
