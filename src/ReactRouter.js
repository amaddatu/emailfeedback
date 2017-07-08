
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom'

import App from './App';
import AppAlternate from './AppAlternate';
import Feedback from './components/Feedback';

class ReactRouter extends Component{

	render(){
		return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/alternate" component={AppAlternate} />
				<Route path="/feedback/:f_key" component={Feedback} />
			</Switch>
		</BrowserRouter>
		);
	}
	

}

export default ReactRouter;
