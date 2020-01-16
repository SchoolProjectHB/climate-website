import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
// React Router Import
import { Switch, Route, Redirect } from 'react-router-dom';
// Import pages
import Start from './components/pages/Start';
import Klimatforandringar from './components/pages/Klimatforandringar';





class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Switch>
<<<<<<< HEAD
          <Redirect from="/" exact to="/start"></Redirect>
=======
        <Redirect from= "/climate-website" exact to = "/start"></Redirect>          
>>>>>>> 711ec93eb5b597f46948e2c73ea36c1fced0f901
          <Route path="/start" component={Start}/>
          <Route path="/statistic" component={Klimatforandringar}/>
        </Switch>
        <Footer />

      </div>
    );
  }
}



export default App;