import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Switch, Route } from "react-router-dom";
import FossilFuel from "../pages/statistic/FossilFuels";
import GlobalTemp from "../pages/statistic/GlobalTemp";
import Glacier from "../pages/statistic/Glacier";
import SeaLevel from "../pages/statistic/SeaLevel";
import { Link } from "react-router-dom";

class Klimatforandringar extends Component {
  render() {
    return (
      <div className="content">
        <div class="climateButton">
          <Link to="/statistic/FossilFuels">
            <button class="fossilButton">Fossila Bränslen</button>
          </Link>
          <Link to="/statistic/Glacier">
            <button class="glacierButton">Glaciärer</button>
          </Link>
          <Link to="/statistic/GlobalTemp">
            <button class="tempButton">Globala Temperaturer</button>
          </Link>
          <Link to="/statistic/SeaLevel">
            <button class="seaButton">Havsnivåer</button>
          </Link>
        </div>
        <Switch>
          <Route path="/statistic/FossilFuels" component={FossilFuel} />
          <Route path="/statistic/Glacier" component={Glacier} />
          <Route path="/statistic/GlobalTemp" component={GlobalTemp} />
          <Route path="/statistic/SeaLevel" component={SeaLevel} />
        </Switch>
      </div>
    );
  }
}

export default Klimatforandringar;
