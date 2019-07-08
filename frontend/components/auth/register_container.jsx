import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import { register } from "../../actions/session_actions";
import AuthBox from "./auth_box";

const mapStateToProps = ({ errors }) => {
	return {
		errors: errors.session,
		formType: "register",
		navLink: <NavLink style={{ color: '#7289da'}} to="/login">Already have an account?</NavLink>,
		title: (
			<div>
				<h2 className= "login-title">Create an Account</h2>
			</div>
		)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		processForm: user => dispatch(register(user))
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(AuthBox)
);
