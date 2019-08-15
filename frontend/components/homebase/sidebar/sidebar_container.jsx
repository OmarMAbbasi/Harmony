import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import Sidebar from "./sidebar";
import { fetchGuild } from "../../../actions/guild_actions";

const mapStateToProps = (state, ownProps) => {
	let currentUser = state.session.currentUser;
	return {
		currentUser: currentUser,
		home: currentUser.home,
		guilds: state.entities.guilds,
		channels: Object.values(state.entities.channels).filter(
			chan =>
				chan.guildId == ownProps.match.params.guildId || currentUser.home.id
		)
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
