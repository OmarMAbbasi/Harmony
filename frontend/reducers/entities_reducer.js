import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import guildsReducer from "./guilds_reducer";
import channelsReducer from "./channels_reducer";
import messageReducer from "./message_reducer";

const entitiesReducer = combineReducers({
	users: usersReducer,
	guilds: guildsReducer,
	channels: channelsReducer,
	messages: messageReducer
});

export default entitiesReducer;
