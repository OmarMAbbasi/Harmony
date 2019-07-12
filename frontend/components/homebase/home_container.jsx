import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter, Redirect, Route } from "react-router-dom";
import Home from "./home";
import { logout } from "../../actions/session_actions";
import { fetchGuild } from "../../actions/guild_actions";

const mapStateToProps = (
	{ errors, session: { id }, entities: { users, guilds } },
	ownProps
) => {
	return {
		errors: errors,
		guilds: guilds,
		currentUser: users[id]
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(logout()),
		fetchGuild: guildId => dispatch(fetchGuild(guildId))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
