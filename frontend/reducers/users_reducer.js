import { RECIEVE_CURRENT_USER } from "action_path";

export default usersReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	let newState = Object.assign({}, oldState);
	switch (action.type) {
		case RECIEVE_CURRENT_USER:
			newState[action.user.id] = action.user;
			return newState;
		default:
			return oldState;
	}
};

