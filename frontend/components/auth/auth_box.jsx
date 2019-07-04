import React from "react";
import { withRouter } from "react-router-dom";

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

	update(field) {
		return e =>
			this.setState({
				[field]: e.currentTarget.value
			});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.processForm(user);
	}

	render() {
		const usernameField = (
			<label>
				USERNAME:
				<input
					type="text"
					value={this.state.username}
					onChange={this.update("username")}
				/>
			</label>
		);

		const emailField = (
			<label>
				EMAIL:
				<input
					type="text"
					value={this.state.email}
					onChange={this.update("email")}
				/>
			</label>
		);

		const passwordField = (
			<label>
				PASSWORD:
				<input
					type="password"
					value={this.state.password}
					onChange={this.update("password")}
				/>
			</label>
		);

		let formFields;

		if (this.props.formType === "login") {
			formFields = (
				<div>
					{this.props.title}
					{emailField}
					{passwordField}
					<input type="submit" value="Login" />
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
					<input type="submit" value="Continue" />
					{this.props.navLink}
				</div>
			);
		}

		return (
			<div>
				<p>Discord Image in top left</p>
				<form onSubmit={this.handleSubmit}>
					<br />
					<div>
						{formFields}
						{/* {this.renderErrors()} */}
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(AuthBox);
