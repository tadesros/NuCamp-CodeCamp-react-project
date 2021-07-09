//Import from ActionTypes all named exports
import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseURL";

//Define Action Creator Function
//Pass in all values needed to create a comment
//Return object with type and payload
//Type- ActionType
//Payload-pass in values 
//could pass it like: camsiteID (shorthand property names)
// in es6
export const addComment = (campsiteId, rating, author, text) => ({
	type: ActionTypes.ADD_COMMENT,
	payload: {
		campsiteId: campsiteId,
		rating: rating,
		author: author,
		text: text,
	},
});



export const fetchCampsites = () => (dispatch) => {
	dispatch(campsitesLoading());

 return fetch(baseUrl + "campsites")
		.then((response) => response.json())
		.then((campsites) => dispatch(addCampsites(campsites)));
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
		.then((response) => response.json())
		.then((comments) => dispatch(addComments(comments)));
};


export const commentsFailed = (errMess) => ({
	type: ActionTypes.COMMENTS_FAILED,
	payload: errMess,
});

export const addComments = (comments) => ({
	type: ActionTypes.ADD_COMMENTS,
	payload: comments,
});


export const fetchPromotions = () => (dispatch) => {
	dispatch(promotionsLoading());

	return fetch(baseUrl + "promotions")
		.then((response) => response.json())
		.then((promotions) => dispatch(addPromotions(promotions)));
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