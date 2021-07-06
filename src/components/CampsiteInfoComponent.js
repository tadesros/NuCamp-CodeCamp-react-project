import React, { Component } from "react";

import {
	Card,
	CardImg,
	CardText,
	CardBody,
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Col,
	Row,
	Label
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

/************************** METHODS  ***********************/
//Methods: Render Campsite information
function RenderCampsite({ campsite }) {
	return (
		<div className='col-md-5 m-1'>
			<Card>
				<CardImg top src={campsite.image} alt={campsite.name} />
				<CardBody>

					<CardText>{campsite.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
}
//Method: Render Comments takes in the renders array
function RenderComments({ comments }) {
	if (comments) {
		return (
			<div className='col-md-5 m-1'>
				<h4>Comments</h4>
				{comments.map((comment) => {
					return (
						<div>
							<p>
								{comment.text}
								<br />
								--{comment.author}{" "}
								{new Intl.DateTimeFormat("en-US", {
									year: "numeric",
									month: "short",
									day: "2-digit",
								}).format(new Date(Date.parse(comment.date)))}
							</p>
						</div>
					);
				})}


				{/*Render Comment Form Button*/}
				<CommentForm />

			</div>
		);
	}
}
function CampsiteInfo(props) {
	if (props.campsite) {
		return (
			<div className='container'>

				<div className='row'>
					<div className='col'>
						<Breadcrumb>
							<BreadcrumbItem>
								<Link to='/directory'>Directory</Link>
							</BreadcrumbItem>
							<BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
						</Breadcrumb>
						<h2>{props.campsite.name}</h2>
						<hr />
					</div>
				</div>

				<div className='row'>
					<RenderCampsite campsite={props.campsite} />
					<RenderComments comments={props.comments} />
				</div>
				
			</div>
		);
	}
	return <div />;
}
//Add a class component
class CommentForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
			rating: "",
			author: "",
			text: "",
			touched: {
				author: false,
			},
		};

		//Bindings
		this.toggleModal = this.toggleModal.bind(this);

		//Bind this handler to object.
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//Toggle Modal
	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	}
	//lOG CURRENT STATE TO THE CONSOLE.
	handleSubmit(values) {
		console.log("Current state is: " + JSON.stringify(values));
		alert("Current state is: " + JSON.stringify(values));
		//This prevents refreshing the entire page.
	}

	render() {
		return (
			<React.Fragment>				
				<Button outline onClick={this.toggleModal}>
					<i className='fa fa-pencil fa-lg' />
					Submit Comment
				</Button>

				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>

					<ModalBody>
						{/*Local Form*/}
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							{/* RATING */}
							<Row className='form-group'>

								<Label htmlFor='rating' md={2}>
									Rating
								</Label>
								<Col md={10}>
									<Control.select
										model='.rating'
										id='rating'
										name='rating'
										className='form-control'
									>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
									</Control.select>
								</Col>
							</Row>
							{/* Author control.text - 6 lines */}
							<Row className='form-group'>
								<Label htmlFor='author' md={2}>
									Author
								</Label>

								<Col md={10}>
									<Control.text
										model='.author'
										id='author'
										name='author'
										placeholder='Author'
										className='form-control'
										validators={{
									//		required,
											minLength: minLength(2),
											maxLength: maxLength(15),
										}}
									/>
									<Errors
										className='text-danger'
										model='.author'
										show='touched'
										component='div'
										messages={{
											required: "Required",
											minLength: "Must be at least 2 characters",
											maxLength: "Must be 15 characters or less",
										}}
									/>
								</Col>
							</Row>
							{/* Text */}
							<Row className='form-group'>
								<Label htmlFor='text' md={2}>
									Text
								</Label>

								<Col md={10}>
									<Control.textarea
										model='.text'
										id='text'
										name='text'
										rows='6'
										className='form-control'
									/>
								</Col>
							</Row>
							{/* Submit Button*/}
							<Row className='form-group'>
								<Col md={{ size: 10, offset: 2 }}>
									<Button type='submit' color='primary'>
										Submit
									</Button>
								</Col>
							</Row>
						</LocalForm>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}


export default CampsiteInfo;
