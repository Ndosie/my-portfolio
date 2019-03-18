import React, {Component} from "react";

class Portfolio extends Component{
	render(){
		return(
			<div className="container">
				<h2 className="text-center text-uppercase text-secondary mb-0 heading">My works</h2>
				<hr className="star-dark mb-5"/>
				<div className="row">
					<p className="col-md-12 col-lg-12">One of my works in web and mobile versions..</p>
					<div className="col-md-6 col-lg-6">
					  <a className="portfolio-item d-block mx-auto" target="_blank" href="http://www.usafiriprofile.com" rel="noopener noreferrer">
						<img className="img-fluid" src="img/portfolio/up_web.jpg" alt=""/>
					  </a>
					</div>
					<div className="col-md-6 col-lg-6">
					  <a className="portfolio-item d-block mx-auto" href="#">
						<img className="img-fluid" src="img/portfolio/up_mobile.jpg" alt=""/>
					  </a>
					</div>
				</div>
			</div>
		);
	}
}

export default Portfolio;