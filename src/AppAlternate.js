import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class AppAlternate extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Alternate</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/AppAlternate.js</code> and save to reload!
        </p>

        <Link to="/" >Link to App</Link>
        
      </div>
    );
  }
}

export default AppAlternate;
