//Import from ActionTypes all named exports
import * as ActionTypes from "./ActionTypes";

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