import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import countries from './data/countries.json'

// Components
import CountryDetail from './components/CountryDetail';

class App extends Component {

  generateCountryList = () => {
    return countries.map((country,i)=>{
      return <a key={i} className="list-group-item list-group-item-action" href={`/${country.cca3}`}>{country.flag} {country.name.common}</a>
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
              <div className="list-group">
                {this.generateCountryList()}
              </div>
            </div>
            <BrowserRouter>
              <Switch>
                <Route path="/:country" component={CountryDetail} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
