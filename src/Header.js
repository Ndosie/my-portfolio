import React, {Component} from "react";

class Header extends Component{
	render(){
		return(
			<header className="App-header">
				<div className="container">
				<img src="img/profile_picture.jpg" className="rounded-circle" alt="Esther Ndosi" width="304" height="236"/>
				<p>Hellow!, I'am a web and mobile developer using Android & React technologies!!.</p>
				</div>
			</header>
		);
	}
}

export default Header;