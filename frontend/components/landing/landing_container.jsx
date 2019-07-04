import { connect } from "react-redux";
import Landing from "../components/Landing";
import { logout } from "../../actions/session_actions";

const mapStateToProps = (
	{ sessions: { id }, entities: { users } },
	ownProps
) => ({
	currentUser: users[id]
    });

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Landing);
