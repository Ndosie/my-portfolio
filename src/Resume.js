import React, {Component} from "react";

class About extends Component{
	render(){
		return(
			<div className="container">
				<h2 className="text-center text-uppercase text-secondary mb-0 heading">My Resume</h2>
				<hr className="star-dark mb-5" />
				<div className="row">
					<div className="col-lg-12 mx-auto">
						<h4 className="heading">Education</h4>
						<table className="table table-responsive table-bordered">
						  <thead>
							<tr>
							  <th scope="col">Level/Course</th>
							  <th scope="col">Name of Institution/ School</th>
							  <th scope="col">Year of passing</th>
							  <th scope="col">Award</th>
							</tr>
						  </thead>
						  <tbody>
							<tr>
							  <td>Ordinary Level</td>
							  <td>Kilomeni Secondary School</td>
							  <td>2006</td>
							  <td>Certificate</td>
							</tr>
							<tr>
							  <td>Advance Level(PCM)</td>
							  <td>St. Mary’s Mazinde Juu Secondary School</td>
							  <td>2009</td>
							  <td>Certificate</td>
							</tr>
							<tr>
							  <td>Degree (Bachelor of Science in Information Systems)</td>
							  <td>University of Dodoma</td>
							  <td>2012</td>
							  <td>Certificate</td>
							</tr>
							<tr>
							  <td>Google Africa Scholarship Challenge(Android)</td>
							  <td>Udacity</td>
							  <td>2018</td>
							  <td>Certificate</td>
							</tr>
							<tr>
							  <td>Grow With Google Scholarships(Android)</td>
							  <td>Plurasight</td>
							  <td>2018-2019</td>
							  <td>Certificate</td>
							</tr>
							<tr>
							  <td>Andela Tanzania</td>
							  <td>Open classrooms</td>
							  <td>2018-2019</td>
							  <td>Certificate</td>
							</tr>
						  </tbody>
						</table>
						<br/>
						<h4 className="heading">Work Experience</h4>
						<table className="table-responsive table-bordered">
						  <thead>
							<tr>
							  <th scope="col">Office</th>
							  <th scope="col">Duration</th>
							  <th scope="col">Responsibilities</th>
							  <th scope="col">Skills Acquired</th>
							</tr>
						  </thead>
						  <tbody>
							<tr>
							  <td>Kilimanjaro Regional Office in Kilimanjaro.</td>
							  <td>16th July 2012 – 24th August 2012.</td>
							  <td>Maintaining ICT resources within the
								office. Providing IT user support to the
								office employees on using the ICT
								resources. Leading in analyzing the group
								assignment of implementing Web-Based
								ICT Inventory System for the office
							  </td>
							  <td>Leadership, problem solving , analytical,
								teamwork and communication skills
							  </td>
							</tr>
							<tr>
							  <td>Sajos Training centre and Internet Café in Kilimanjaro</td>
							  <td>29 th September 2012 – 6 th May 2013</td>
							  <td>Managing the business and making sure
								it meets the needs of our customers.Teaching the
								students computer applications and maintaining
								the business internet network.
							  </td>
							  <td>Flexibility, time management and self-
								management skills
							  </td>
							</tr>
							<tr>
							  <td>Pyramid Pharma Ltd in Dar es Salaam</td>
							  <td>19 th August 2013 – Present</td>
							  <td>Managing the company key customers.
								Receiving and processing customer
								orders and request for quotations.
								Overseeing the company sales team.
							  </td>
							  <td>Communication skills, Flexibility, and self-
								management skills.
							  </td>
							</tr>
						  </tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default About;