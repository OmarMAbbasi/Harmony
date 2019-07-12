import React from "react";
import { Route, Link, Redirect, withRouter, Switch } from "react-router-dom";
import Sidebar from "./sidebar/sidebar_container";
import GuildContainer from "./guild/guild_container";
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			opened: false
		};
	}

	componentDidMount() {
		let guild = this.props.currentUser.home.id;
		this.props.fetchGuild(guild);
	}

	render() {
		return (
			<div className="home-view">
				<Switch>
					<Route path="/home/guilds/:guildId" component={Sidebar} />
					<Route
						path="/home/"
						currentUser={this.props.currentUser}
						component={Sidebar}
					/>
				</Switch>
				<Switch>
					<Route
						exact
						path="/home/"
						currentUser={this.props.currentUser}
						component={GuildContainer}
					/>
					<Route
						path="/home/guilds/:guildId/:channelId"
						component={GuildContainer}
					/>
					<Route path="/home/guilds/:guildId" component={GuildContainer} />
				</Switch>
			</div>
		);
	}
}

export default Home;
