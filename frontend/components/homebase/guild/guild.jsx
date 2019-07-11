import React, { Component } from "react";
import { Route, Link, Redirect, withRouter } from "react-router-dom";
import UserAnchor from "./user_anchor/user_anchor_container";
import ChannelList from "./channel_list/channel_list_container";
import GuildTag from "./guild_tag";
import ChatboxContainer from "./chatbox/chatbox_container";

class Guild extends Component {
	constructor(props) {
		super(props);
		this.currentUser = this.props.currentUser;
		this.state = {
			guildId: this.props.match.params.guildId
		};
	}

	componentDidMount() {
		this.props.fetchGuild(this.props.match.params.guildId);
	}

	componentDidUpdate(prevProps, prevState) {
		this.props.fetchGuild(this.props.match.params.guildId);
	}

	render() {
		return (
			<div className="guild-box">
				<div className="guild-bar">
					<GuildTag guildId={this.props.match.params.guildId} />
					<ChannelList guildId={this.props.match.params.guildId} />

					<UserAnchor />
				</div>
				<Route path="/home/guilds/:guildId/:channelId" component={ChatboxContainer} />
			</div>
		);
	}
}

export default Guild;
