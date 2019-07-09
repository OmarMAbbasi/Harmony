import React from "react";
import { Route, Link, Switch, Redirect, withRouter } from "react-router-dom";
import SidebarGuild from "./sidebar_guild";

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.currentUser = this.props.currentUser;
	}

	render() {
		return (
			<div style={{ width: "72px" }}>
				<div>{this.currentUser.home.name}</div>
				<ul>
					{this.currentUser.guilds.map(guild => (
						<SidebarGuild key={guild.id} guild={guild} />
					))}
				</ul>
			</div>
		);
	}
}

export default Sidebar;
