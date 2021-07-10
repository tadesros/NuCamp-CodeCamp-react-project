//import React, { Component } from "react";
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseURL";

function RenderDirectoryItem({ campsite }) {
	return (
		<Card>
			<Link to={`/directory/${campsite.id}`}>
				<CardImg
					width='100%'
					src={baseUrl + campsite.image}
					alt={campsite.name}
				/>
				<CardImgOverlay>
					<CardTitle>{campsite.name}</CardTitle>
				</CardImgOverlay>
			</Link>
		</Card>
	);
}

function Directory(props) {
	/* Go thru all of the campsites from the local state
      make a new array. Has a diff. campsite for each item*/
	const directory = props.campsites.campsites.map((campsite) => {
		return (
			<div key={campsite.id} className='col-md-5 m-1'>
				<RenderDirectoryItem campsite={campsite} />
			</div>
		);
	});

	//Check if loading
	if (props.campsites.isLoading) {
		return (
			<div className='container'>
				<div className='row'>
					<Loading />
				</div>
			</div>
		);
	}
	//Check for error message
	if (props.campsites.errMess) {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<h4>{props.campsites.errMess}</h4>
					</div>
				</div>
			</div>
		);
	}
	//Content of the Page
	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to='/home'>Home</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>Directory</BreadcrumbItem>
					</Breadcrumb>
					<h2>Directory</h2>
					<hr />
				</div>
			</div>

			<div className='row'>{directory}</div>
		</div>
	);
}

export default Directory;
