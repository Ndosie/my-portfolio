import React, {Component} from "react";

class Home extends Component{
	render(){
		return(
			<div className="container">
				<h2 className="text-center text-uppercase text-secondary mb-0 heading">About Me</h2>
				<hr className="star-dark mb-5" />
				<div className="row">
					<div className="col-lg-8 mx-auto">
						<p>Welcome to my portfolio website!! Am a web and mobile developer, l love to work behind computers and see how things are changing on the screen 
						with a piece of line I have written. Anything regarding programming I'll love to work for as I love to crack my head and use my analytical skills 
						to solve problems. On top of that I love a good working environment which will allow me to grow with great learning experience and bring out the best in me. 
						Other best thing about my self is I like to learn new things thus why I choose to travel this road of being Technology Leader seeing how technologies are changing everyday. 
						Would you love someone like me in your projects? Please hire me!!!</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;