import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (
	{ sessions: { id }, entities: { users } },
	ownProps
) => ({
	currentUser: users[id]
});

// const mapStateToProps = (state, ownProps) => ({
// 	currentUser: console.log(state)
// });

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout())
});

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
			<header>
				<nav>
					<div>Logo</div>
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar);
