import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import ChannelList from "./channel_list";

const mapStateToProps = (state, ownProps) => {
	let currentGuild = 
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

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(ChannelList)
);
