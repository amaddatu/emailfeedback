import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

class Feedback extends Component {
  constructor(props){
    super();
    console.log(props);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Alternate</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/components/Feedback.js</code> and save to reload!
        </p>

        <Link to="/" >Link to App</Link>
        <p>{this.props.match.params.f_key}</p>
      </div>
    );
  }
}

export default Feedback;
