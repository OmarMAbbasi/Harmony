import React from "react";
import { Route, Link, Switch, Redirect, withRouter } from "react-router-dom";
import SidebarGuild from "./sidebar_guild";

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.currentUser = this.props.currentUser;
		this.state = {
			activeGuildId: this.currentUser.home.id
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick(e) {
		e.preventDefault();
		this.setState({ activeGuildId: e.target.id });
	}
	//TODO Manage CSS with state from props
	render() {
		let css = "sidebar-list-item-wrapper";
		if (this.state.activeGuildId == this.currentUser.home.id) {
			css = "sidebar-list-item-wrapper-focus";
		}
		return (
			<ul className="sidebar-container">
				<li key="home" className="sidebar-list-item">
					<img
						onClick={this.onClick}
						className={css}
						id={this.currentUser.home.id}
						src={window.icons.transparent}
					/>
				</li>
				<li className="sidebar-list-item">
					<div className="sidebar-separator"></div>
				</li>
				<div style={{ overflowY: "scroll" }}>
					{this.currentUser.guilds.map(guild => (
						<div>
							<li onClick={this.onClick}  className="sidebar-list-item">
								<SidebarGuild
									key={guild.id}
									guild={guild}
									activeGuildId={this.state.activeGuildId}
								/>
							</li>
						</div>
					))}
				</div>
				<li key="add-guild" className='className="sidebar-list-item"'></li>
			</ul>
		);
	}
}

export default Sidebar;
