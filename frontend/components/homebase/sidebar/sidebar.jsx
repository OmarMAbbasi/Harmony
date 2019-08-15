import React from "react";
import { Route, Link, Switch, Redirect, withRouter } from "react-router-dom";
import SidebarGuild from "./sidebar_guild";

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.currentUser = this.props.currentUser;
		this.state = {
			activeGuildId: props.match.params.guildId || this.currentUser.home.id
		};
		this.onClick = this.onClick.bind(this);
		this.props.fetchGuild(this.state.activeGuildId);
	}

	componentDidMount() {
		// this.props.fetchGuild(this.state.activeGuildId);
	}

	componentWillUpdate(prevProps, prevState) {
		debugger;
		if (prevProps.activeGuildId !== this.props.guildId) {
			this.props.fetchGuild(this.props.activeGuildId);
		}
	}

	onClick(e) {
		let id = this.state.activeGuildId;
		this.setState({ activeGuildId: e.target.id });
	}
	render() {
		// if (!this.props.channels[0] || !this.props.channels[0].id) {
		// 	return null;
		// }
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
						<div key={guild.id}>
							<li onClick={this.onClick} className="sidebar-list-item">
								<SidebarGuild
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
