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

// function LoginButton(props) {
// 	return <button onClick={props.onClick}>Login</button>;
// }

// function LogoutButton(props) {
// 	return (<button onClick={props.onClick}>Logout</button>;)
// }

function OpenButton({ openUsernameField, currentUser }) {
	if (!currentUser) {
		return <button onClick={openUsernameField}>Open Discord</button>;
	} else {
		return <Link to={`/home/`}>Open Discord</Link>;
	}
}

//<button>Open Discord</button>

class Splash extends React.Component {
	constructor(props) {
		super(props);
		this.newDummyUser = this.newDummyUser.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
		this.openUsernameField = this.openUsernameField.bind(this);
		this.state = { opened: false };
	}

	newDummyUser(e) {
		e.preventDefault();
		console.log("Create new user. Mount main container and contnue signup.");
	}
	demoLogin(e) {
		e.preventDefault();
		console.log("Demo Login Script");
	}

	openUsernameField(e) {
		e.preventDefault();
		this.setState({ opened: true });
		console.log("hi");
	}

	// render() {
	// 	const isLoggedIn = this.state.isLoggedIn;
	// 	let button;

	// 	if (isLoggedIn) {
	// 		button = <LogoutButton onClick={this.handleLogoutClick} />;
	// 	} else {
	// 		button = <LoginButton onClick={this.handleLoginClick} />;
	// 	}

	// 	return <div>{button}</div>;
	// }

	render() {
		const opened = this.state.opened;
		let splash;
		if (!opened) {
			splash = (
				<ul>
					<li>
						<button onClick={this.demoLogin}>Demo Login</button>
					</li>
					<OpenButton
						currentUser={this.currentUser}
						openUsernameField={this.openUsernameField}
					/>

					<br></br>
				</ul>
			);
		} else {
			splash = (
				<form onSubmit={this.newDummyUser}>
					<input type="text" placeholder="enter a username"></input>
					<button onClick={this.newDummyUser}>Arrow</button>
					<Link to={`/login/`}>Already have an account? </Link>
				</form>
			);
		}
		return (
			<div>
				<h1>Splash Page</h1>
				{splash}
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Splash);
