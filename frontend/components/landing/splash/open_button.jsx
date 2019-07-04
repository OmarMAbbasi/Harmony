import React from "react";
import { Link, withRouter } from "react-router-dom";

function OpenButton({ openUsernameField, currentUser }) {
	if (!currentUser) {
		return <button onClick={openUsernameField}>Open Discord</button>;
	} else {
		return (
			<Link to={`/home/`}>
				<div>Open Discord</div>
			</Link>
		);
	}
}

export default OpenButton;
