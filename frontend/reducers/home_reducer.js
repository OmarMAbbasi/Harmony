import {
	RECEIVE_CURRENT_USER,
	LOGOUT_CURRENT_USER,
	RECEIVE_SESSION_ERRORS
} from "../actions/session_actions";

const homeReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	let newState = Object.assign({}, oldState);
	// return oldState;
	switch (action.type) {
		case LOGOUT_CURRENT_USER:
			return newState;
		default:
			return oldState;
	}
};

export default homeReducer;
