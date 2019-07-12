import React from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.buttonText;
		this.path;
		let currentUser = props.currentUser;
		if (!currentUser) {
			this.buttonText = "Login";
			this.path = `/login/`;
		} else {
			this.buttonText = "Open";
			this.path = `/home/`;
		}
	}

	render() {
		return (
			<div class-name="nav-foreground">
				<header className="nav-anchor">
					<nav className="nav-desktop">
						<div className="nav-logo">
							<Link to="/">
								<div className="nav-icon-container">
									<img
										id="nav-discord"
										className="nav-discord"
										src={window.images.harmonyLogo}
									/>
								</div>
							</Link>
						</div>
						<ul className="nav-dropdowns">
							<li className="nav-list-item"></li>
							<li className="nav-list-item"></li>
							<li className="nav-list-item"></li>
						</ul>
						<ul className="nav-right">
							<li className="social-media">
								<a href="https://www.instagram.com/discordapp/" target="_blank">
									<img
										id="twitter"
										className="social-media-image"
										src={window.images.twitter}
									/>
								</a>
							</li>
							<li className="social-media">
								<a href="https://www.facebook.com/discordapp" target="_blank">
									<img
										id="facebook"
										className="social-media-image"
										src={window.images.facebook}
									/>
								</a>
							</li>
							<li className="social-media">
								<a href="https://twitter.com/discordapp" target="_blank">
									<img
										id="instagram"
										className="social-media-image"
										src={window.images.instagram}
									/>
								</a>
							</li>
							<li></li>
						</ul>

						<Link to={this.path} className="home-button">
							<div className="home-button-link">{this.buttonText}</div>
						</Link>
					</nav>
				</header>
			</div>
		);
	}
}

export default Navbar;
