import React, { Component } from 'react';
import './App.css';

import {
	Route,
	HashRouter
} from "react-router-dom";

import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

import Home from "./Home";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
		<HashRouter>
			<div className="App">
				<Nav/>
				<Header/>

				<div className="content">
					<Route exact path="/" component={Home}/>
					<Route path="/resume" component={Resume}/>
					<Route path="/portfolio" component={Portfolio}/>
					<Route path="/contact" component={Contact}/>
				</div>
				
				<Footer/>
			</div>
		</HashRouter>
    );
  }
}

export default App;
