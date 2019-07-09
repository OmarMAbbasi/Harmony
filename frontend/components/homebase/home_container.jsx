import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter, Redirect, Route } from "react-router-dom";
import Home from "./home";
import { logout } from "../../actions/session_actions";

const mapStateToProps = ({ errors, session: { id }, entities: { users } }) => {
	return {
		errors: errors,
		currentUser: users[id]
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(logout())
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Home)
);
