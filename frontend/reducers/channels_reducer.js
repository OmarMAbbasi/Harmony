import {
	GET_CHANNEL,
	DELETE_CHANNEL,
	RECEIVE_CHANNEL_ERRORS
} from "../actions/channel_actions";

import { GET_GUILD } from "../actions/guild_actions";
import { CABLE_MESSAGE, CABLE_MESSAGES } from "../actions/message_actions";

const channelsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	let newState = Object.assign({}, oldState);
	switch (action.type) {
		case CABLE_MESSAGE:
			newState = Object.assign({}, oldState, action.payload.messages);
			return newState;
		case GET_CHANNEL:
			Object.assign(newState, action.payload.channels);
			return newState;
		case DELETE_CHANNEL:
			newState = {};
			return newState;
		case GET_GUILD:
			Object.assign(newState, action.payload.channels);
			return newState;
		case RECEIVE_CHANNEL_ERRORS:
			return oldState;
		default:
			return oldState;
	}
};

export default channelsReducer;
