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
			<ul className="sidebar-container">
				<li className="sidebar-list-item">
					<img
						className="sidebar-list-item-wrapper"
						id="transparent"
						src={window.icons.transparent}
					/>
				</li>
				<div style={{ overflowY: "scroll" }}>
					{this.currentUser.guilds.map(guild => (
						<SidebarGuild key={guild.id} guild={guild} />
				))}
				</div>
				<li className='className="sidebar-list-item"'></li>
			</ul>
		);
	}
}

export default Sidebar;
