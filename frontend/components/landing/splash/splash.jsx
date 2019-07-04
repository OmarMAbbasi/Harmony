import React from "react";
import { register } from "../../../actions/session_actions";
import { Link, Redirect, withRouter } from "react-router-dom";
import OpenButton from "./open_button";

class Splash extends React.Component {
	constructor(props) {
		super(props);
		this.currentUser = this.props.currentUser;
		this.logout = this.props.logout;
		this.newDummyUser = this.newDummyUser.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
		this.openUsernameField = this.openUsernameField.bind(this);
		this.state = { opened: false};
	}

	newDummyUser(e) {
		e.preventDefault();
		console.log(
			"Create new user. Mount main container and continue registration."
		);
	}
	demoLogin(e) {
		e.preventDefault();
		let user = {
			email: "demouser@gmail.com",
			password: "password1234"
		};
		this.props.login(user).then(() => this.props.history.push("/home/"));
	}

	openUsernameField(e) {
		e.preventDefault();
		this.setState({ opened: true });
	}

	componentDidMount() {
		this.currentUser = this.props.currentUser;
	}

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
					<input type="submit" value="Some Arrow" />
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

export default Splash;
