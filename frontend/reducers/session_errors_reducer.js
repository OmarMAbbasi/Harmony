import {
	RECEIVE_SESSION_ERRORS,
	RECEIVE_CURRENT_USER
} from "../actions/session_actions";

const sessionErrorsReducer = (oldState = [], action) => {
	Object.freeze(oldState);
	let newState = Object.assign({}, oldState);
	debugger;
	switch (action.type) {
		case RECEIVE_SESSION_ERRORS:
			newState = action.errors;
			return newState;
		case RECEIVE_CURRENT_USER:
			newState = [];
			return newState;

		default:
			return oldState;
	}
};

export default sessionErrorsReducer;
