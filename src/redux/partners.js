import * as ActionTypes from "./ActionTypes";

export const Partners = (
	state = { isLoading: true, errMess: null, partnersArr: [] },
	action
) => {
	switch (action.type) {
		case ActionTypes.ADD_PARTNERS:
			return {
				...state,
				isLoading: false,
				errMess: null,
				partnersArr: action.payload,
			};

		case ActionTypes.PARTNERS_LOADING:
			return { ...state, isLoading: true, errMess: null, partnersArr: [] };

		case ActionTypes.PARTNERS_FAILED:
			return { ...state, isLoading: false, errMess: action.payload };

		default:
			return state;
	}
};
