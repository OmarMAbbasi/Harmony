import React from "react";
import { Link, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { register, login, logout } from "../../../actions/session_actions";
import Splash from "./splash";

const mapStateToProps = (
	{ session: { id }, entities: { users } },
	ownProps
) => ({
	currentUser: users[id]
});

const mapDispatchToProps = dispatch => ({
	register: () => dispatch(register()),
	login: user => dispatch(login(user)),
	logout: () => dispatch(logout())
});

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Splash)
);
