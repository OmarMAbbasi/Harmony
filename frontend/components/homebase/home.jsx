import React from "react";
import { Route, Link, Redirect, withRouter } from "react-router-dom";
import Sidebar from "./sidebar/sidebar_container";
import GuildContainer from "./guild/guild_container";
class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='home-view'>
				<Sidebar />
				<Route path="/home/guilds/:guildId" component={GuildContainer} />
			</div>
		);
	}
}

export default Home;
