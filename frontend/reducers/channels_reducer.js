import {
	GET_CHANNEL,
	// GET_GUILD
	DELETE_CHANNEL,
	RECEIVE_CHANNEL_ERRORS
} from "../actions/channel_actions";

const channelsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	let newState = Object.assign({}, oldState);
	switch (action.type) {
		case GET_CHANNEL:
			newState[action.channel.id] = action.channel;
			return newState;
		case DELETE_CHANNEL:
			newState = {};
			return newState;
		case RECEIVE_CHANNEL_ERRORS:
			newState = action.errors;
			return newState;
		default:
			return oldState;
	}
};

export default channelsReducer;