import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter, Redirect, Route } from "react-router-dom";
import Guild from "./guild";
import { logout } from "../../../actions/session_actions";
import { fetchGuild } from "../../../actions/guild_actions";
import { fetchChannel } from "../../../actions/channel_actions";

const mapStateToProps = (
	{
		errors,
		session: { currentUser, id },
		entities: { users, guilds, channels }
	},
	ownProps
) => {
	return {
		errors: errors,
		currentUser: currentUser,
		users: users, 
		guilds: guilds,
		channels: channels
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(logout()),
		fetchGuild: guildId => dispatch(fetchGuild(guildId)),
		fetchChannel: channelId => dispatch(fetchChannel(channelId))
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Guild)
);
