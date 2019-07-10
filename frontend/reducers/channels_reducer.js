import {
	GET_CHANNEL,
	DELETE_CHANNEL,
	RECEIVE_CHANNEL_ERRORS
} from "../actions/channel_actions";

import { GET_GUILD } from "../actions/guild_actions";

const channelsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	let newState = Object.assign({}, oldState);
	switch (action.type) {
		case GET_CHANNEL:
			newState[action.channel.id] = action.channels;
			return newState;
		case DELETE_CHANNEL:
			newState = {};
			return newState;
		case GET_GUILD:
			Object.assign(newState, action.payload.channels);
			return newState;
		case RECEIVE_CHANNEL_ERRORS:
			newState = action.errors;
			return newState;
		default:
			return oldState;
	}
};

export default channelsReducer;
