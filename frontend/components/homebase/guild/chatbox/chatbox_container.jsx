import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import { fetchGuild } from "../../../../actions/guild_actions";
import { fetchChannel } from "../../../../actions/channel_actions";
import Chatbox from "./chatbox";
import {
	cableMessage,
	cableMessages
} from "../../../../actions/message_actions";

const mapStateToProps = (state, ownProps) => {
	let currentUser = ownProps.currentUser;
	return {
		guildId: ownProps.guildId,
		currentUser: currentUser,
		guilds: state.entities.guilds,
		channels: Object.values(state.entities.channels).filter(
			chan => chan.guildId == ownProps.channelId || currentUser.home.id
		),
		currentGuild: state.entities.channels[ownProps.guildId],
		messages: Object.values(state.entities.messages).filter(
			mess => mess.channelId == ownProps.match.params.channelId
		)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		cableMessage: payload => dispatch(cableMessage(payload)),
		cableMessages: payload => dispatch(cableMessages(payload)),
		fetchChannel: channelId => dispatch(fetchChannel(channelId)),
		fetchGuild: guildId => dispatch(fetchGuild(guildId))
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Chatbox)
);
