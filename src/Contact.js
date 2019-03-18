import React, {Component} from "react";

class Contact extends Component{
	render(){
		return(
			<div className="container">
				<h2 className="text-center text-uppercase text-secondary mb-0 heading">Contact Me</h2>
				<hr className="star-dark mb-5" />
				<div className="row">
					<div className="col-lg-8 mx-auto">
						<form name="sentMessage" id="contactForm">
							<div className="control-group">
								<div className="form-group">
								<label for="name">Name</label>
								<input className="form-control" id="name" type="text" required="required"/>
								</div>
							</div>
							<div className="control-group">
								<div className="form-group">
								<label for="email">Email Address</label>
								<input className="form-control" id="email" type="email" required="required"/>
								</div>
							</div>
							<div className="control-group">
								<div className="form-group">
								<label for="phone">Phone Number</label>
								<input className="form-control" id="phone" type="tel"  required="required"/>
								</div>
							</div>
							<div className="control-group">
								<div className="form-group">
								<label for="message">Message</label>
								<textarea className="form-control" id="message" rows="5" required="required"></textarea>
								</div>
							</div>
							<br/>
							<div id="success"></div>
							<div className="form-group">
								<button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;