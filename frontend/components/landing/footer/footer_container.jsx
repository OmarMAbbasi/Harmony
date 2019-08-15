import React from "react";
import { Link, withRouter } from "react-router-dom";

const Footer = props => {

	return (
		<footer className="footer">
			<img
				id="footer-background"
				className="landing-footer"
				src={window.images.footer}
			/>
			<div className="footer-box">
				<div style={{ flex: "1" }}>
					<h2 className="ready-yet">Ready to try Discord? It's free!</h2>
					<h3 className="other-players">JOIN OVER 250 MILLION PLAYERS TODAY</h3>
				</div>
				<Link
					className="join-button"
					style={{ color: "white" }}
					to={`/register/`}
				>
					Join Discord
				</Link>
			</div>
		</footer>
	);
};

export default withRouter(Footer);
