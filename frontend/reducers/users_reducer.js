import {
	RECEIVE_CURRENT_USER,
	ABANDON_USERNAME
} from "../actions/session_actions";

const usersReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	let newState = Object.assign({}, oldState);
	switch (action.type) {
		case RECEIVE_CURRENT_USER:
			newState[action.user.id] = action.user;
			return newState;
		case ABANDON_USERNAME:
			newState = {}
			return newState
		default:
			return oldState;
	}
};

export default usersReducer;
