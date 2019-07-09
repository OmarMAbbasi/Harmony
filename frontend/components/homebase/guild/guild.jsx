import React, { Component } from "react";
import { Route, Link, Redirect, withRouter } from "react-router-dom";

class Guild extends Component {
	constructor(props) {
		super(props);
		this.currentUser = this.props.currentUser;
		this.buttonFocus = this.buttonFocus.bind(this);
		this.buttonBlur = this.buttonBlur.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.state = {
			guildId: this.props.match.params.guildId,
			logout: "hidden-logout-button"
		};
		this.blur;
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
	componentDidMount() {
		this.props.fetchGuild(this.state.guildId);
	}

	componentDidUpdate(prevProps, prevState) {
		this.state["guildId"] = this.props.match.params.guildId;
		this.props.fetchGuild(this.state.guildId);
	}

	render() {
		return (
			<div>
				<div>
					<div>ChannelList</div>
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
								<div style={{ color: "white" }}>
									<img
										style={{ maxWidth: "100%", maxHeight: "100%" }}
										src={window.images.gear}
									></img>
								</div>
							</button>
						</div>
					</div>
				</div>
				<div>{this.props.match.params.guildId}</div>
			</div>
		);
	}
}

export default Guild;
