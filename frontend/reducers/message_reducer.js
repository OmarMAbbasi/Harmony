import { CABLE_MESSAGE, CABLE_MESSAGES } from "../actions/message_actions";
import { GET_CHANNEL } from "../actions/channel_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { GET_GUILD } from '../actions/guild_actions';

const messageReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	let newState = Object.assign({}, oldState);
	switch (action.type) {
		case GET_GUILD:
			Object.assign(newState, action.payload.messages);
			return newState;
		case GET_CHANNEL:
			Object.assign(newState, action.payload.messages);
			return newState;
		case CABLE_MESSAGE:
			let message = {};
			message[action.payload.messages.id] = action.payload.messages;
			newState = Object.assign({}, oldState, message);
			return newState;
		case RECEIVE_CURRENT_USER:
			Object.assign(newState, action.payload.messages);
			return newState;
		case CABLE_MESSAGES:
			if (action.payload) {
				newState = Object.assign({}, oldState, action.payload.messages);
			}
			return newState;
		default:
			return oldState;
	}
};

// const renameObjKey = ({ action.payload.messages, oldKey, newKey }) => {
// 	const messageKeys = Object.keys(action.payload.messages);
// 	const newObj = keys.reduce((acc, val) => {
// 		if (val === oldKey) {
// 			acc[newKey] = action.payload.messages[oldKey];
// 		} else {
// 			acc[val] = action.payload.messages[val];
// 		}
// 		return acc;
// 	}, {});

// 	return newObj;
// };

export default messageReducer;
