import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "./navbar";

const mapStateToProps = (
	{ session: { currentUser, id }, entities: { users } },
	ownProps
) => ({
	currentUser: currentUser,
	id: id
});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar);
