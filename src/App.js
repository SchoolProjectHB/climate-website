import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Start from "./components/layouts/Start";
import Klimatforandringar from "./components/layouts/Klimatforandringar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Redirect from="/climate-website" exact to="/start"></Redirect>
          <Route path="/start" component={Start} />
          <Route path="/statistic" component={Klimatforandringar} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
