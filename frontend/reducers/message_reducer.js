import { CABLE_MESSAGE, CABLE_MESSAGES } from "../actions/message_actions";
import { GET_CHANNEL } from "../actions/channel_actions";

const messageReducer = (oldState = [], action) => {
	Object.freeze(oldState);
	let newState = Object.assign({}, oldState);
	switch (action.type) {
		case GET_CHANNEL:
			newState = Object.assign({}, oldState, action.payload.messages);
			return newState;
		case CABLE_MESSAGE:
			newState = Object.assign({}, oldState, action.payload.messages);
			return newState;
		case CABLE_MESSAGES:
			newState = Object.assign({}, oldState, action.payload.messages);
			return newState;
		default:
			return oldState;
	}
};

export default messageReducer;