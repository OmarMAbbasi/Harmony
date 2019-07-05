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
			<header className="nav-anchor">
				<nav className="nav-desktop">
					<div className="nav-logo">
						<Link to="/">
							<div className="nav-icon-container">
								<img
									id="nav-discord"
									className="nav-discord"
									src={window.images.longLogo}
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
							<a href="">
								<img
									id="twitter"
									className="social-media-image"
									src={window.images.twitter}
								/>
							</a>
						</li>
						<li className="social-media">
							<a href="">
								<img
									id="facebook"
									className="social-media-image"
									src={window.images.facebook}
								/>
							</a>
						</li>
						<li className="social-media">
							<a href="">
								<img
									id="instagram"
									className="social-media-image"
									src={window.images.instagram}
								/>
							</a>
						</li>
						<li></li>
					</ul>

					<Link to={this.path}>
						<div>{this.buttonText}</div>
					</Link>
				</nav>
			</header>
		);
	}
}

export default Navbar;
