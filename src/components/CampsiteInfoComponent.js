import React, { Component } from "react";

import {
	Card,
	CardImg,
	CardImgOverlay,
	CardText,
	CardBody,
	CardTitle,
} from "reactstrap";

class CampsiteInfo extends Component {
	/************************** METHODS  ***********************/

	//Methods: Render Campsite information
	renderCampsite(campsite) {
		return (
			<div className='col-md-5 m-1'>
				<Card>
					<CardImg top src={campsite.image} alt={campsite.name} />
					<CardBody>
						<CardTitle>{campsite.name}</CardTitle>
						<CardText>{campsite.description}</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}
	//Method: Render Comments takes in the renders array
	renderComments(comments) {
		//Check if comments are NOT null or undefined
		if (comments) {
			return (
				<div className='col-md-5 m-1'>
					<h4>Comments</h4>
				</div>
/*			{this.props.comments.map(
					(eachElement) => {
						return <li>{eachElement}</li>;
			}			)}
*/				
		);
		}
		else {			
			return (<div></div>);
		}
		
	}

	render() {
		//Check if it is null or empty
		if (this.props.campsite) {
			return (
				<div>
					<div className='row'>{this.renderCampsite(this.props.campsite)}</div>
					<div className='row'>{this.renderComments(this.props.campsite.comments)}</div>
				</div>
			);
		} else {
			return (<div></div>);
		}
	}
} /* end class CampsiteInfo*/

export default CampsiteInfo;
