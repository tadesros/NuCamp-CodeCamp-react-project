//Import from ActionTypes all named exports
import * as ActionTypes from "./ActionTypes";
import { CAMPSITES } from "../shared/campsites";

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

	setTimeout(() => {
		dispatch(addCampsites(CAMPSITES));
	}, 2000);
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