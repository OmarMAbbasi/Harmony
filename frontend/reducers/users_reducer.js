import {
	RECEIVE_CURRENT_USER,
	ABANDON_USERNAME
} from "../actions/session_actions";

import { CABLE_MESSAGE, CABLE_MESSAGES } from "../actions/message_actions";
import { GET_GUILD } from "../actions/guild_actions";

const usersReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	let newState = Object.assign({}, oldState);
	switch (action.type) {
		case CABLE_MESSAGE:
			newState = Object.assign({}, oldState, action.payload.messages);
			return newState;
		case RECEIVE_CURRENT_USER:
			Object.assign(newState, action.payload.users);
			debugger;
			return newState;
		case GET_GUILD:
			Object.assign(newState, action.payload.users, oldState);
			return newState;
		case ABANDON_USERNAME:
			newState = {};
			return newState;
		default:
			return oldState;
	}
};

export default usersReducer;
