import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import { login } from "../../actions/session_actions";
import AuthBox from "./auth_box";

const mapStateToProps = ({ errors }) => {
	return {
		errors: errors.session,
		formType: "login",
		navLink: <NavLink to="/register">Register</NavLink>,
		title: (
			<div>
				<h2>Welcome Back!</h2>
				<h3>We're so excited to see you again!</h3>
			</div>
		)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		processForm: user => dispatch(login(user))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthBox);
