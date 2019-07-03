import * as SessionAPIUtil from "./util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

//Actions

const receiveCurrentUser = currentUser => ({
	type: "RECEIVE_CURRENT_USER",
	currentUser
});

const logoutCurrentUser = () => ({
	type: "LOGOUT_CURRENT_USER",
	currentUser
});

//Takes Array
const receiveErrors = errors => ({
	type: "RECEIVE_ERRORS",
	errors
});

//Thunk
export const login = user => dispatch =>
	PostApiUtil.login(user).then(currentUser =>
		dispatch(receiveCurrentUser(currentUser))
    );
    
export const signup = user => dispatch =>
	PostApiUtil.signup(user).then(currentUser =>
		dispatch(receiveCurrentUser(currentUser))
    );
    
export const logout =  => dispatch =>
	PostApiUtil.logout().then( () =>
		dispatch(logoutCurrentUser())
    );