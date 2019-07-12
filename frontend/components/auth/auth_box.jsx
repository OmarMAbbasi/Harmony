import React from "react";
import { Route, Link, Switch, Redirect, withRouter } from "react-router-dom";
class AuthBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		if (this.props.history.location.username) {
			this.setState({ username: this.props.history.location.username });
		}
	}

	update(field) {
		return e =>
			this.setState({
				[field]: e.currentTarget.value
			});
	}
	handleErrors() {
		return (
			<ul>
				{this.props.errors.map((error, i) => (
					<li className="error-text" key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state);
		if (!this.currentUser) {
			this.props
				.processForm(user)
				.then(() => this.props.history.push("/home/"));
			
			return <Route to="/home/" />;
		} else {
			this.setState({ errors: "Not Logged In" });
		}
	}

	render() {
		const usernameField = (
			<div className="field-wrapper">
				<h5 className="field-label">USERNAME:</h5>
				<input
					className="auth-field"
					type="text"
					value={this.state.username}
					onChange={this.update("username")}
				/>
			</div>
		);

		const emailField = (
			<div className="field-wrapper">
				<h5 className="field-label">EMAIL:</h5>
				<input
					className="auth-field"
					type="text"
					value={this.state.email}
					onChange={this.update("email")}
				/>
			</div>
		);

		const passwordField = (
			<div className="field-wrapper">
				<h5 className="field-label">PASSWORD:</h5>
				<input
					className="auth-field"
					type="password"
					value={this.state.password}
					onChange={this.update("password")}
				/>
			</div>
		);

		let formFields;

		if (this.props.formType === "login") {
			formFields = (
				<div>
					{this.props.title}
					{this.props.subTitle}
					{emailField}
					{passwordField}
					<input className="auth-button" type="submit" value="Login" />
					{this.props.navLink}
				</div>
			);
		} else {
			formFields = (
				<div>
					{this.props.title}
					{emailField}
					{usernameField}
					{passwordField}
					<input className="auth-button" type="submit" value="Continue" />
					{this.props.navLink}
				</div>
			);
		}

		return (
			<div className="auth-anchor">
				<img
					id="auth-splash"
					src={window.images.authSplash}
					className="auth-splash"
				></img>
				<div className="auth-anchor">
					<Link className="auth-logo-link" to="/">
						<img
							id="longLogo"
							src={window.images.longLogo}
							className="auth-logo"
						/>
					</Link>
					<form className="auth-box" onSubmit={this.handleSubmit}>
						<div className="form-wrapper">
							<div>
								{formFields}
								{this.handleErrors()}
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default withRouter(AuthBox);
