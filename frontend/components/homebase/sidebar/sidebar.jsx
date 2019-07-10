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
			<div className="sidebar-container">
				<div className="sidebar-list-item">
					<img
						className="sidebar-list-item-wrapper"
						id="transparent"
						src={window.icons.transparent}
					/>

					<div></div>
				</div>
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
