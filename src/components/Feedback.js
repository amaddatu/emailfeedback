import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import helpers from './utils/helpers';

class Feedback extends Component {
  constructor(props){
    super();
    console.log(props);
    this.state = {
      f_key: props.match.params.f_key
      , valid_f_key: false
      , name: []
      , website: ""
      , user: ""
    };
  }
  componentDidMount(){
    var fb_component = this;
    helpers.getGroup(this.state.f_key).then(function(response){
      //console.log(response);
      if(typeof response.error != 'undefined'){
        fb_component.setState({valid_f_key: false});
      }
      else{
        fb_component.setState({
          valid_f_key: true
          , name: response.name
          , website: response.website
        });
      }
      console.log(response);
    });
    var user = localStorage.getItem('user');
    if(typeof user === 'undefined' || user == null){
      user = this.makeUser();
      localStorage.setItem('user', user);
      this.setState({
        user: user
      });
      console.log(user);
    }

  }
  makeUser() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 32; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  render() {
    if(!this.state.valid_f_key){
      return (
        <div className="feedback site-wrapper">
          Not a valid group. 
        </div>
      );
    }
    else{
      const name = this.state.name;
      var count = 0;
      function ListName(props){
        if(count <= 0){
          count++;
          return <span>{props.value}</span>
        }
        else{
          count++;
          return <span>, {props.value}</span>
        }
      }
      const names = name.map((n) =>
        // Correct! Key should be specified inside the array.
        <ListName key={n}
                  value={n} />
      );
      return (
        <div className="feedback site-wrapper">
          <div className="site-wrapper-inner">

            <div className="cover-container">

              <div className="masthead clearfix">
                <div className="inner">
                  <h3 className="masthead-brand">{names}</h3>
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

                <p>{this.state.f_key}</p>
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
}

export default Feedback;
