import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import Sidebar from "./sidebar";

const mapStateToProps = (state, ownProps) => {
	let currentUser = state.entities.users[state.session.id];
	return {
		currentUser: currentUser,
		home: currentUser.home,
		guilds: currentUser.guilds
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
)(Sidebar);
