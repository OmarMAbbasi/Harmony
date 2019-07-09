import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import Home from "./home";

const mapStateToProps = (state, ownProps) => {
	currentUserId = state.session.id;
	return {
		currentUser: users[currentUserId],
		home: state.session.home,
		guilds: state.session.guilds
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
	)(Home)
);
