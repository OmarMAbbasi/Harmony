import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { login } from "../../actions/session_actions";
import AuthBox from "./auth_box";

const mapStateToProps = ({ errors }) => {
	return {
		errors: errors.session,
		formType: "login",
		navLink: <Link to="/register">Register</Link>
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
