//Import corresponding data
import * as ActionTypes from "./ActionTypes";
//This file is for splitting the reducer.


//Export and give it a nam
//Two parameters: 1. Exiting / Current State
//Second parameter: 2. Action Object 
//Body Check for type of action and return the state.
//Common use JS switch statement check for action type and return
//Type
export const Campsites = (
	state = {
		isLoading: true,
		errMess: null,
		campsites: []
	},
	action
) => {
	switch (action.type) {
		case ActionTypes.ADD_CAMPSITES:
			return {
				...state,
				isLoading: false,
				errMess: null,
				campsites: action.payload,
			};
		case ActionTypes.CAMPSITES_LOADING:
			return { ...state, isLoading: true, errMess: null, campsites: [] };
		case ActionTypes.CAMPSITES_FAILED:
			return { ...state, isLoading: false, errMess: action.payload };
		default:
			return state;
	}
};
