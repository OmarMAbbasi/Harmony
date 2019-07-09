import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import Guild from "./guild";

const mapStateToProps = (state, ownProps) => {
	let currentUserId = state.session.id;
	return {	
		currentUser: state.entities.users[currentUserId]
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchGuild: guildId => dispatch(fetchGuild(guildId))
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Guild)
);
