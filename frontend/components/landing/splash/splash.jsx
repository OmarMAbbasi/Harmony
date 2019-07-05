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
		this.state = { opened: false };
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
				<div className="splash-wrapper">
					<div className="splash-buttons">
						<button className="demo-login" onClick={this.demoLogin}>
							Demo Login
						</button>
					</div>
					<div className="splash-buttons">
						<OpenButton
							currentUser={this.currentUser}
							openUsernameField={this.openUsernameField}
						/>
					</div>
				</div>
			);
		} else {
			splash = (
				<div className="splash-wrapper">
					<div>
						<div className="splash-register-wrapper">
							<form
								className="splash-register-form"
								onSubmit={this.newDummyUser}
							>
								<input
									className="splash-username-input"
									type="text"
									placeholder="enter a username"
								></input>
								<input className="splash-register-button" type="submit" />
							</form>
						</div>
						<Link
							className="login-prompt"
							to={`/login/`}
							style={{
								textDecoration: "none",
								color: "#7289da",
								fontSize: "14px",
								padding: "5px"
							}}
						>
							Already Have An Account?
						</Link>
					</div>
				</div>
			);
		}
		return (
			<section className="hero">
				<div className="welcome">
					<h1 className="elevator">It's time to ditch Skype and TeamSpeak.</h1>
					<p className="pitch">
						All-in-one voice and text chat for gamers that's free, secure, and
						works on both your desktop and phone. Stop paying for TeamSpeak
						servers and hassling with Skype. Simplify your life.
					</p>
					{splash}
				</div>
				<div className="splash-background-wrapper">
					<img id='splash-background' className='splash-background' src={window.images.splash} />
				</div>
			</section>
		);
	}
}

export default Splash;
