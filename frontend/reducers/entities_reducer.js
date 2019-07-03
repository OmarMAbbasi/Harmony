import { combineReducers } from "redux";

import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
	usersReducer
});

export default entitiesReducer;
