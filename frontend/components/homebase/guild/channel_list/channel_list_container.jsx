import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import ChannelList from "./channel_list";
import { fetchGuild } from "../../../../actions/guild_actions";
import { fetchChannel } from "../../../../actions/channel_actions";

const mapStateToProps = (state, ownProps) => {
	return {
		currentChannelId: ownProps.channelId,
		currentGuildId: ownProps.guildId,
		guilds: state.entities.guilds,
		channels: Object.values(state.entities.channels).filter(
			chan => chan.guildId == ownProps.guildId
		),
		currentGuild: state.entities.guilds[ownProps.guildId]
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchGuild: guildId => dispatch(fetchGuild(guildId)),
		fetchChannel: channelId => dispatch(fetchChannel(channelId))
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(ChannelList)
);
