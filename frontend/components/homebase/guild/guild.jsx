import React from "react";
import { Route, Link, Switch, Redirect, withRouter } from "react-router-dom";

class Sidebar extends React.Component {
	constructor(props) {
		debugger;
		super(props);
		this.currentUser = this.props.currentUser;
	}

	render() {
		return (
			<div style={{ width: "100%" }}>
				<div>
					{this.props.match.params.guildId}
					<h1>ChannelList</h1>
				</div>
			</div>
		);
	}
}

export default Sidebar;
