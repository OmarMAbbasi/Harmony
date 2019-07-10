import {
	GET_GUILD,
	DELETE_GUILD,
	RECEIVE_GUILD_ERRORS
} from "../actions/guild_actions";

const guildsReducer = (oldState, action) => {
	if (!oldState) {
		oldState = {};
	}
	Object.freeze(oldState);

	let newState = Object.assign({}, oldState);
	switch (action.type) {
		case GET_GUILD:
			Object.assign(newState, action.payload.guilds);
			return newState;
		case DELETE_GUILD:
			newState = {};
			return newState;
		case RECEIVE_GUILD_ERRORS:
			newState = action.errors;
			return newState;
		default:
			return oldState;
	}
};

export default guildsReducer;
