import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const ABANDON_USERNAME = "ABANDON_USERNAME";

//Actions

const receiveCurrentUser = currentUser => ({
	type: "RECEIVE_CURRENT_USER",
	currentUser
});

const logoutCurrentUser = () => ({
	type: "LOGOUT_CURRENT_USER"
});

const abandonUsername = () => ({
	type: "ABANDON_USERNAME"
});

//Takes Array
const receiveErrors = errors => ({
	type: "RECEIVE_SESSION_ERRORS",
	errors
});

//Thunk
export const login = user => dispatch =>
	SessionAPIUtil.login(user).then(currentUser =>
		dispatch(receiveCurrentUser(currentUser))
	);

export const register = user => dispatch =>
	SessionAPIUtil.register(user).then(currentUser =>
		dispatch(receiveCurrentUser(currentUser))
	);

export const logout = () => dispatch =>
	SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()));

export const claim = user => dispatch =>
	SessionAPIUtil.claim(user).then(currentUser =>
		dispatch(receiveCurrentUser(currentUser))
	);

export const abandon = user => dispatch =>
	SessionAPIUtil.abandon(user.id).then(() => dispatch(abandonUsername()));
