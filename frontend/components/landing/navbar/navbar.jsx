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
					<div class="nav-logo">
						<Link to="/">
							<div className="nav-icon-container">
								<div>Incoming Gamepad</div>
								<div>Incoming Discord</div>
							</div>
						</Link>
					</div>
					<ul>
						<li>Navbar list</li>
						<li>Navbar list</li>
						<li>Navbar list</li>
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
