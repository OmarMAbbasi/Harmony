import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import guildsReducer from "./guilds_reducer";
import channelsReducer from "./channels_reducer";

const entitiesReducer = combineReducers({
	users: usersReducer,
	guilds: guildsReducer,
	channels: channelsReducer
});

export default entitiesReducer;
