import React from "react";
import { Link, withRouter } from "react-router-dom";

function OpenButton({ openUsernameField, currentUser }) {
	if (!currentUser) {
		return (
			<button className="open-button" onClick={openUsernameField}>
				Open Discord
			</button>
		);
	} else {
		return (
			<button className="open-button">
				<Link to={`/home/`}>Open Discord</Link>
			</button>
		);
	}
}

export default OpenButton;
