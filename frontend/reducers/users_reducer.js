import {
	RECEIVE_CURRENT_USER,
	ABANDON_USERNAME
} from "../actions/session_actions";

import { CABLE_MESSAGE, CABLE_MESSAGES } from "../actions/message_actions";

const usersReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	let newState = Object.assign({}, oldState);
	switch (action.type) {
		case CABLE_MESSAGE:
			newState = Object.assign({}, oldState, action.payload.messages);
			return newState;
		case RECEIVE_CURRENT_USER:
			newState[action.currentUser.id] = action.currentUser;
			return newState;
		case ABANDON_USERNAME:
			newState = {};
			return newState;
		default:
			return oldState;
	}
};

export default usersReducer;
