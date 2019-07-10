import React from "react";
import { Route, Link, Switch, Redirect, withRouter } from "react-router-dom";

class UserAnchor extends React.Component {
	constructor(props) {
		super(props);
		this.currentUser = this.props.currentUser;
		this.buttonFocus = this.buttonFocus.bind(this);
		this.buttonBlur = this.buttonBlur.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.state = {
			logout: "hidden-logout-button",
			gearColor: ""
		};
		this.blur;
	}

	optionOut() {
		this.setState({ currentColor: "" });
	}

	optionOver() {
		this.setState({ currentColor: "white" });
	}

	handleLogout(e) {
		e.preventDefault();
		clearTimeout(this.blur);
		this.props.logout();
		return <Route to="/" />;
	}

	buttonFocus(e) {
		this.setState({ logout: "home-logout-button" });
	}
	buttonBlur(e) {
		this.blur = setTimeout(
			() => this.setState({ logout: "hidden-logout-button" }),
			200
		);
	}

	render() {
		return (
			<div className="user-anchor-wrapper">
				<div className="user-avatar-wrapper">
					<div className="user-profile-pic-wrapper">
						<img
							className="user-avatar-image"
							src={window.images.defaultProfile}
						/>
					</div>
				</div>
				<div className="user-tag-wrapper">
					<div className="user-tag-name">{this.currentUser.username}</div>
					<div className="user-tag-digits">#{this.currentUser.digits}</div>
				</div>
				<div className="anchor-buttons-wrapper">
					<div className={this.state.logout} onClick={this.handleLogout}>
						Log Out
					</div>
					<button
						onFocus={this.buttonFocus}
						onBlur={this.buttonBlur}
						className="user-anchor-button"
					>
						<div>
							<svg
								fill= 'rgba(255,255,255,1)'
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
							>
								<path d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
							</svg>
						</div>
					</button>
				</div>
			</div>
		);
	}
}

export default UserAnchor;
