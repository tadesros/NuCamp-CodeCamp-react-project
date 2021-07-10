//Import from ActionTypes all named exports
import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseURL";

export const fetchCampsites = () => (dispatch) => {
	dispatch(campsitesLoading());

	return fetch(baseUrl + "campsites")
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(
						`Error ${response.status}: ${response.statusText}`
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((campsites) => dispatch(addCampsites(campsites)))
		.catch((error) => dispatch(campsitesFailed(error.message)));
};

export const campsitesLoading = () => ({
	type: ActionTypes.CAMPSITES_LOADING,
});
//Action creator: Action failed
//Type campsites failed with an error message
export const campsitesFailed = (errMess) => ({
	type: ActionTypes.CAMPSITES_FAILED,
	payload: errMess,
});
//Action creator: returns an object 
//Doesn't use redux thunk
export const addCampsites = (campsites) => ({
	type: ActionTypes.ADD_CAMPSITES,
	payload: campsites,
});

//Action Creator: Fetch Comments
export const fetchComments = () => (dispatch) => {
	return fetch(baseUrl + "comments")
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(
						`Error ${response.status}: ${response.statusText}`
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((comments) => dispatch(addComments(comments)))
		.catch((error) => dispatch(commentsFailed(error.message)));
};


export const commentsFailed = (errMess) => ({
	type: ActionTypes.COMMENTS_FAILED,
	payload: errMess,
});

export const addComments = (comments) => ({
	type: ActionTypes.ADD_COMMENTS,
	payload: comments,
});
//Define Action Creator Function
//Pass in all values needed to create a comment
//Return object with type and payload
//Type- ActionType
//Payload-pass in values 
//could pass it like: camsiteID (shorthand property names)
// in es6
export const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (campsiteId, rating, author, text) => (dispatch) => {
	const newComment = {
		campsiteId: campsiteId,
		rating: rating,
		author: author,
		text: text,
	};
	newComment.date = new Date().toISOString();

	return fetch(baseUrl + "comments", {
		method: "POST",
		body: JSON.stringify(newComment),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(
						`Error ${response.status}: ${response.statusText}`
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				throw error;
			}
		)
		.then((response) => response.json())
		.then((response) => dispatch(addComment(response)))
		.catch((error) => {
			console.log("post comment", error.message);
			alert("Your comment could not be posted\nError: " + error.message);
		});
};

export const fetchPromotions = () => (dispatch) => {
	dispatch(promotionsLoading());

	return fetch(baseUrl + "promotions")
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(
						`Error ${response.status}: ${response.statusText}`
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((promotions) => dispatch(addPromotions(promotions)))
		.catch((error) => dispatch(promotionsFailed(error.message)));
};

export const promotionsLoading = () => ({
	type: ActionTypes.PROMOTIONS_LOADING,
});

export const promotionsFailed = (errMess) => ({
	type: ActionTypes.PROMOTIONS_FAILED,
	payload: errMess,
});

export const addPromotions = (promotions) => ({
	type: ActionTypes.ADD_PROMOTIONS,
	payload: promotions,
});

//Group task
export const fetchPartners = () => (dispatch) => {
	dispatch(partnersLoading());

	return fetch(baseUrl + "partners")
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(
						`Error ${response.status}: ${response.statusText}`
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((partners) => dispatch(addPartners(partners)))
		.catch((error) => dispatch(partnersFailed(error.message)));
};

export const partnersLoading = () => ({
	type: ActionTypes.PARTNERS_LOADING,
});

export const partnersFailed = (errMess) => ({
	type: ActionTypes.PARTNERS_FAILED,
	payload: errMess,
});

export const addPartners = (partners) => ({
	type: ActionTypes.ADD_PARTNERS,
	payload: partners,
});