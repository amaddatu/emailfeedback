import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload!
        </p>
        <h1><a href="/api/hello"> To test routing Click here! </a> </h1>
        <p><a href="/api/blogposttest"> To test mongoDB Click here! </a> </p>
        <Link to="/alternate" >Link to AppAlternate</Link>
      </div>
    );
  }
}

export default App;
