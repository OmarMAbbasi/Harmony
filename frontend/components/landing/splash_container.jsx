import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { signup } from "../../actions/session_actions";

// const mapStateToProps = (state, ownProps) => ({
// 	currentUser: console.log(state)
// });

const mapStateToProps = (
	{ sessions: { id }, entities: { users } },
	ownProps
) => ({
	currentUser: users[id]
});

const mapDispatchToProps = dispatch => ({
	signup: () => dispatch(signup())
});

class Splash extends React.Component {
	constructor(props) {
		super(props);
		this.newDummyUser = this.newDummyUser.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
	}

	newDummyUser(e) {
		e.preventDefault();
		console.log("Create new user. Mount main container and contnue signup.");
	}
	demoLogin(e) {
		e.preventDefault();
		console.log("Demo Login Script");
	}
	render() {
		return (
			<div>
				<h1>Splash Page</h1>
				<ul>
					<li>
						<button onClick={this.demoLogin}>Demo Login</button>
					</li>
					<br></br>
					<li>
						<form onSubmit={this.newDummyUser}>
							<input type="text" placeholder="enter a username"></input>
							<button onClick={this.newUser}>Arrow</button>
						</form>
						<p>Already have an account? </p>
					</li>
				</ul>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Splash);
