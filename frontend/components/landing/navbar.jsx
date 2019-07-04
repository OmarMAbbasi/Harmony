import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = props => {
	return (
		<header>
			<nav>
				<div>Logo</div>
				<ul>
					<li>Navbar list</li>
					<li>Navbar list</li>
					<li>Navbar list</li>
				</ul>
				<a href="">
					<div>Link to /login</div>
				</a>
			</nav>
		</header>
	);
};

export default withRouter(Navbar);
