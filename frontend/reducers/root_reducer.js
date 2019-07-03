import { combineReducers } from "redux";

import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import usersReducer from "./users_reducer";

const rootReducer = combineReducers({
	entitiesReducer,
	errorsReducer,
	usersReducer
});

export default rootReducer;
