import React, { Component } from "react";
import CampsiteInfo from "./CampsiteInfoComponent";

import {
	Card,
	CardImg,
	CardImgOverlay,
	CardText,
	CardBody,
	CardTitle,
} from "reactstrap";

class Directory extends Component {
	constructor(props) {
		super(props);
		/* state must always have an object */
		this.state = {
			selectedCampsite: null,
		};
	} /* end constructor*/

	onCampsiteSelect(campsite) {
		this.setState({ selectedCampsite: campsite });
	}

	render() {
		/* Go thru all of the campsites from the local state
      make a new array. Has a diff. campsite for each item*/
		const directory = this.props.campsites.map((campsite) => {
			return (
				<div key={campsite.id} className='col-md-5 m-1'>
					<Card onClick={() => this.onCampsiteSelect(campsite)}>
						<CardImg width='100%' src={campsite.image} alt={campsite.name} />
						<CardImgOverlay>
							<CardTitle>{campsite.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
			);
		});

		/* must return a single react component*/
		return (
			<div className='container'>
				<div className='row'>{directory}</div>

				<CampsiteInfo campsite={this.state.selectedCampsite} />
			</div>
		);
	} /* end render */
} /* end class Directory*/

export default Directory;
