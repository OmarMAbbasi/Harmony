import { connect } from "react-redux";
import Landing from "../components/Landing";
import { logout } from "../../actions/session_actions";
import { Switch, Router, Route, Link, withRouter } from "react-router-dom";

const mapStateToProps = (
	{ session: { id }, entities: { users } },
	ownProps
) => ({
	currentUser: users[id]
});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout())
});

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Landing)
);
