import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Feedback extends Component {
  constructor(props){
    super();
    console.log(props);
  }
  render() {
    return (
      <div className="feedback site-wrapper">

        <div className="site-wrapper-inner">

          <div className="cover-container">

            <div className="masthead clearfix">
              <div className="inner">
                <h3 className="masthead-brand">Cover</h3>
                <nav className="nav nav-masthead">
                  <a className="nav-link active" href="#">Home</a>
                  <a className="nav-link" href="#">Features</a>
                  <a className="nav-link" href="#">Contact</a>
                </nav>
              </div>
            </div>

            <div className="inner cover">
              <h1 className="cover-heading">Cover your page.</h1>
              <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
              <p className="lead">
                <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
              </p>

              <p>{this.props.match.params.f_key}</p>
            </div>

            <div className="mastfoot">
              <div className="inner">
                <p>Cover template for <a href="https://getbootstrap.com">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default Feedback;