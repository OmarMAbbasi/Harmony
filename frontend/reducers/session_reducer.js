import {
	RECEIVE_CURRENT_USER,
	LOGOUT_CURRENT_USER,
	RECEIVE_ERRORS
} from "../actions/session_actions";

const _nullUser = {
    id: null
}


export default sessionReducer = (oldState = _nullUser, action) => {
	Object.freeze(oldState);
	let newState = Object.assign({}, oldState);
	switch (action.type) {
		case RECEIVE_CURRENT_USER:
            newState[id] = action.currentUser.id
			return newState;
		case LOGOUT_CURRENT_USER:
			return newState;
		case RECEIVE_ERRORS:
			return newState;
		default:
			return oldState;
	}
};


