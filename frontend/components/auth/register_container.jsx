import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { register } from "../../actions/session_actions";
import AuthBox from "./auth_box";

const mapStateToProps = ({ errors }) => {
	return {
		errors: errors.session,
		formType: "register",
		navLink: <Link to="/login">Already have an account?</Link>
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
