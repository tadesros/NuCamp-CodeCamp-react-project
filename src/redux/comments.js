import { COMMENTS } from "../shared/comments";
//Import from the ActionTypes module
import * as ActionTypes from "./ActionTypes";

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
			//When action type is ADD_COMMENT
        case ActionTypes.ADD_COMMENT:
             //Action payload is an object you can add more properties
				const comment = action.payload;
                comment.id = state.length;
            //Use todays date
            comment.date = new Date().toISOString();
            //Return new array content with concactenated value
            //added to the end. push mutates the array not 
            //concat.
				return state.concat(comment);
			//Default case return current state
			default:
				return state;
		}
};
