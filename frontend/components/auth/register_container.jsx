import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";

import { register } from "../../actions/session_actions";
import AuthBox from "./auth_box";

const mapStateToProps = ({ errors }) => {
	return {
		errors: errors.session,
		submitText: "Continue",
		navLink: <NavLink to="/login">Already have an account?</NavLink>,
		title: (
			<div>
				<h2>Create an Account</h2>
			</div>
		)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		processForm: user => dispatch(register(user))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthBox);
