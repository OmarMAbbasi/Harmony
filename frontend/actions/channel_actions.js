import * as ChannelAPIUtil from "../util/channel_api_util";

//Actions

export const GET_CHANNEL = "GET_CHANNEL";
export const DELETE_CHANNEL = "DELETE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";

const getChannel = channel => ({
	type: "GET_CHANNEL",
	channel
});

const deleteChannel = () => ({
	type: "DELETE_CHANNEL"
});

const receiveErrors = errors => ({
	type: "RECEIVE_CHANNEL_ERRORS",
	errors
});

//Thunk

export const fetchChannel = channelId => dispatch =>
	ChannelAPIUtils.fetchChannel(channelId).then(
		channel => dispatch(getChannel(channel)),
		err => dispatch(receiveErrors(err.responseJSON))
	);
export const createChannel = channel => dispatch =>
	ChannelAPIUtils.createChannel(channel).then(
		channel => dispatch(getChannel(channel)),
		err => dispatch(receiveErrors(err.responseJSON))
	);
export const updateChannel = channel => dispatch =>
	ChannelAPIUtils.updateChannel(channel).then(
		channel => dispatch(getChannel(channel)),
		err => dispatch(receiveErrors(err.responseJSON))
	);
export const destroyChannel = channelId => dispatch =>
	ChannelAPIUtils.destroyChannel(channelId).then(
		() => dispatch(deleteChannel()),
		err => dispatch(receiveErrors(err.responseJSON))
	);
