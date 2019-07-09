import React from "react";
import { Route, Link, Switch, Redirect, withRouter } from "react-router-dom";
import SidebarGuild from "./sidebar_guild";

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.currentUser = this.props.currentUser;
	}

	handleLogout(e) {
		e.preventDefault();
		clearTimeout(this.blur);
		this.props.logout().then(() => this.props.history.push("/"));
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
					<div className={logout} onClick={this.handleLogout}>
						Log Out
					</div>
					<button
						onFocus={this.buttonFocus}
						onBlur={this.buttonBlur}
						className="user-anchor-button"
					>
						<div style={{ color: "white" }}>
							<img
								style={{ maxWidth: "100%", maxHeight: "100%" }}
								src={window.images.gear}
							></img>
						</div>
					</button>
				</div>
			</div>
		);
	}
}

export default Sidebar;
