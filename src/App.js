import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar'; 
import Footer from './components/layouts/Footer'; 
// React Router Import
import { Switch, Route } from 'react-router-dom'; 
// Import pages
import Start from './components/pages/Start';
import Klimatforandringar from './components/pages/Klimatforandringar';
import Ordlista from './components/pages/Ordlista';
import Omoss from './components/pages/Omoss';



class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Switch>
           <Route exact path="/" component={Start}/>  
          <Route path="/klimatforandringar" component={Klimatforandringar}/>
          <Route path="/ordlista" component={Ordlista}/>
          <Route path="/omoss" component={Omoss}/>
        </Switch>
        <Footer />

      </div>
    );
  }
}



export default App;
