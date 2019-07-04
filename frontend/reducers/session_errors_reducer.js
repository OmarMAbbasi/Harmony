import {
	RECEIVE_SESSION_ERRORS,
	RECEIVE_CURRENT_USER
} from "../actions/session_actions";

const sessionErrorsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	let newState = Object.assign({}, oldState);
	switch (action.type) {
		case RECEIVE_SESSION_ERRORS:
			newState[errors] = action.errors;
			return newState;
		case RECEIVE_CURRENT_USER:
			newState['errors'] = {};
			return newState;

		default:
			return oldState;
	}
};

export default sessionErrorsReducer;
