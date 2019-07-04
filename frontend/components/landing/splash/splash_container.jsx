import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { register } from "../../../actions/session_actions";
import Splash from "./splash";

const mapStateToProps = (
	{ sessions: { id }, entities: { users } },
	ownProps
) => ({
	currentUser: users[id]
});

const mapDispatchToProps = dispatch => ({
	register: () => dispatch(register())
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Splash);
