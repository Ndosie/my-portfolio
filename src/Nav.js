import React, {Component} from "react";

import {NavLink} from "react-router-dom";

class Nav extends Component{
	render(){
		return(
			<nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase navbar-custom" id="mainNav">
			<div className="container">
			  <NavLink className="navbar-brand js-scroll-trigger App-logo" exact to="/">Esther Ndosi</NavLink>
			  <button className="navbar-toggler navbar-toggler-right text-uppercase text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				Menu
				<i className="fa fa-bars"></i>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto">
				  <li className="nav-item mx-0 mx-lg-1">
					<NavLink className="nav-link" to="/resume">My Resume</NavLink>
				  </li>
				  <li className="nav-item mx-0 mx-lg-1">
					<NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
				  </li>
				  <li className="nav-item mx-0 mx-lg-1">
					<NavLink className="nav-link" to="/contact">Contact</NavLink>
				  </li>
				</ul>
			  </div>
			</div>
		    </nav>
		);
	}
}

export default Nav;