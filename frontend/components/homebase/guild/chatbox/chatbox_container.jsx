import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import ChannelList from "./channel_list";
import { fetchGuild } from "../../../../actions/guild_actions";
import { fetchChannel } from "../../../../actions/channel_actions";

const mapStateToProps = (state, ownProps) => {
	return {
		currentGuildId: ownProps.guildId,
		guilds: state.entities.guilds,
		channels: Object.values(state.entities.channels).filter(
			chan => chan.guildId == ownProps.guildId
		),
		currentGuild: state.entities.channels[ownProps.guildId]
	};
};

const mapDispatchToProps = dispatch => {
	return {
        fetchChannel: channelId => dispatch(fetchChannel(channelId)),
		fetchGuild: guildId => dispatch(fetchGuild(guildId))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ChannelList);
