import React from "react";
import { Link, withRouter } from "react-router-dom";

function OpenButton({ openUsernameField, currentUser }) {
	if (!currentUser) {
		return <button className="demo-login" 
		onClick={openUsernameField}>Open Discord</button>;
	} else {
		return (
			<div>
				<div className="splash-buttons">
					<div className="demo-login">
						<button className="demo-login">
							<Link to={`/home/`}>Open Discord</Link>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default OpenButton;
