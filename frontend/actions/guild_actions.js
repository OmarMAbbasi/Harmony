import * as GuildAPIUtils from "../util/guild_api_util";

//Actions

export const GET_GUILD = "GET_GUILD";
export const DELETE_GUILD = "DELETE_GUILD";
export const RECEIVE_GUILD_ERRORS = "RECEIVE_GUILD_ERRORS";

const getGuild = guild => ({
	type: "GET_GUILD",
	guild
});

const deleteGuild = () => ({
	type: "DELETE_GUILD"
});

const receiveErrors = errors => ({
	type: "RECEIVE_GUILD_ERRORS",
	errors
});

//Thunk

export const fetchGuild = guildId => dispatch =>
	GuildAPIUtils.fetchGuild(guildId).then(
		guild => dispatch(getGuild(guild)),
		err => dispatch(receiveErrors(err.responseJSON))
	);
export const createGuild = guild => dispatch =>
	GuildAPIUtils.createGuild(guild).then(
		guild => dispatch(getGuild(guild)),
		err => dispatch(receiveErrors(err.responseJSON))
	);
export const updateGuild = guild => dispatch =>
	GuildAPIUtils.updateGuild(guild).then(
		guild => dispatch(getGuild(guild)),
		err => dispatch(receiveErrors(err.responseJSON))
	);
export const destroyGuild = guildId => dispatch =>
	GuildAPIUtils.destroyGuild(guildId).then(
		() => dispatch(deleteGuild()),
		err => dispatch(receiveErrors(err.responseJSON))
	);
