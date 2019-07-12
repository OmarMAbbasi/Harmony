// import * as MessageAPIUtil from "../util/guild_api_util";

//Actions

export const CABLE_MESSAGE = "CABLE_MESSAGE";
export const CABLE_MESSAGES = 'CABLE_MESSAGES';

export const cableMessage = payload => ({
	type: "CABLE_MESSAGE",
	payload
});

export const cableMessages = payload => ({
	type: "CABLE_MESSAGES",
	payload
});

// //Thunk
