import React, {Component} from "react";

class Footer extends Component{
	render(){
		return(
			<footer className="footer text-center">
				<div className="container">
					<div className="row">
						<div className="col-md-4 mb-5 mb-lg-0">
							<h4 className="text-uppercase mb-4 heading">Location</h4>
							<p className="lead mb-0">P.O.Box 16215 Dar es Salaam
							<br/>Mikocheni, Industrial Area</p>
						</div>
						<div className="col-md-4 mb-5 mb-lg-0">
							<h4 className="text-uppercase mb-4 heading">Socialize with me</h4>
							<ul className="list-inline mb-0">
								<li className="list-inline-item">
								<a className="btn btn-outline-primary btn-social text-center rounded-circle" href="https://web.facebook.com/endosi24">
								<i className="fa fa-facebook" aria-hidden="true"></i>
								</a>
								</li>
								<li className="list-inline-item">
								<a className="btn btn-outline-primary btn-social text-center rounded-circle" href="https://twitter.com/NdosiEsther">
								<i className="fa fa-twitter" aria-hidden="true"></i>
								</a>
								</li>
								<li className="list-inline-item">
								<a className="btn btn-outline-primary btn-social text-center rounded-circle" href="https://www.linkedin.com/in/esther-ndosi-4195b25a/">
								<i className="fa fa-linkedin" aria-hidden="true"></i>
								</a>
								</li>
								<li className="list-inline-item">
								<a className="btn btn-outline-primary btn-social text-center rounded-circle" href="https://github.com/Ndosie">
								<i className="fa fa-github" aria-hidden="true"></i>
								</a>
								</li>
							</ul>
						</div>
						<div className="col-md-4">
							<h4 className="text-uppercase mb-4 heading">Best Quote</h4>
							<p className="lead mb-0">"It's not about what you know, it's not about who you know, It's about who knows what you know" Timirah James</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;