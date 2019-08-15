import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter, Redirect, Route } from "react-router-dom";
import UserAnchor from "./user_anchor";
import { logout } from "../../../../actions/session_actions";

const mapStateToProps = (
	{ errors, session: { currentUser, id }, entities: { users } },
	ownProps
) => {
	return {
		errors: errors,
		currentUser: currentUser
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(logout())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserAnchor);
