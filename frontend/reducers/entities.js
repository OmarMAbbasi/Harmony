import { combineReducers } from "redux";

import sessionReducer from "./session_reducer";
import usersReducer from "./users_reducer";

export default combineReducers({
	sessionReducer,
	usersReducer
});
