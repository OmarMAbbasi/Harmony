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
					className="login-input"
				/>
			</label>
		);

		const emailField = (
			<label>
				EMAIL:
				<input
					type="text"
					value={this.state.username}
					onChange={this.update("username")}
					className="login-input"
				/>
			</label>
		);

		const passwordField = (
			<label>
				Password:
				<input
					type="password"
					value={this.state.password}
					onChange={this.update("password")}
					className="login-input"
				/>
			</label>
		);

		return (
			<div>
				<p>Discord Image in top left</p>
				<form onSubmit={this.handleSubmit}>
					<br />
					{this.renderErrors()}
					<div>
						
						<input type="submit" value={this.props.formType} />
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(AuthBox);
