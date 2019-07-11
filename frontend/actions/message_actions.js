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

// export const fetchGuild = guildId => dispatch =>
// 	GuildAPIUtils.fetchGuild(guildId).then(
// 		payload => dispatch(getGuild(payload)),
// 		err => dispatch(receiveErrors(err.responseJSON))
// 	);
// export const createGuild = guild => dispatch =>
// 	GuildAPIUtils.createGuild(guild).then(
// 		payload => dispatch(getGuild(payload)),
// 		err => dispatch(receiveErrors(err.responseJSON))
// 	);
// export const updateGuild = guild => dispatch =>
// 	GuildAPIUtils.updateGuild(guild).then(
// 		payload => dispatch(getGuild(payload)),
// 		err => dispatch(receiveErrors(err.responseJSON))
// 	);
// export const destroyGuild = guildId => dispatch =>
// 	GuildAPIUtils.destroyGuild(guildId).then(
// 		() => dispatch(deleteGuild()),
// 		err => dispatch(receiveErrors(err.responseJSON))
// 	);
