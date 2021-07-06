//Import corresponding data
import { CAMPSITES } from "../shared/campsites";
//This file is for splitting the reducer.


//Export and give it a nam
//Two parameters: 1. Exiting / Current State
//Second parameter: 2. Action Object 
//Body Check for type of action and return the state.
//Common use JS switch statement check for action type and return
//Type
export const Campsites = (state = CAMPSITES, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
