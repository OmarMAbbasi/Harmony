import {
	RECEIVE_CURRENT_USER,
	LOGOUT_CURRENT_USER,
	RECEIVE_SESSION_ERRORS
} from "../actions/session_actions";

const _nullUser = {
	id: null
};

const sessionReducer = (oldState = _nullUser, action) => {
	Object.freeze(oldState);
	let newState = Object.assign({}, oldState);
	switch (action.type) {
		case RECEIVE_CURRENT_USER:
			newState.id = action.currentUser.id;
			newState.home = action.currentUser.home.id;
			newState.guilds = action.currentUser.guilds
			return newState;
		case LOGOUT_CURRENT_USER:
			newState.id = undefined;
			newState.home = undefined;
			return newState;
		case RECEIVE_SESSION_ERRORS:
			return newState;
		default:
			return oldState;
	}
};

export default sessionReducer;
