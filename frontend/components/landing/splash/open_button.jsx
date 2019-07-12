import React from "react";
import { Link, withRouter } from "react-router-dom";

function OpenButton({ openUsernameField, currentUser }) {
	if (!currentUser) {
		return (
			<button className="open-button" onClick={openUsernameField}>
				Open Harmony
			</button>
		);
	} else {
		return (
			<button className="open-button">
				<Link style={{ color: "white" }} to={`/home/`}>
					Open Harmony
				</Link>
			</button>
		);
	}
}

export default OpenButton;
