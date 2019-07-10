import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import ChannelList from "./channel_list";
import { fetchGuild } from "../../../../actions/guild_actions";

const mapStateToProps = (state, ownProps) => {
	return {
		currentGuildId: ownProps.guildId,
		guilds: state.entities.guilds,
		currentGuild: state.entities.guilds[ownProps.guildId]
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchGuild: guildId => dispatch(fetchGuild(guildId))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ChannelList);