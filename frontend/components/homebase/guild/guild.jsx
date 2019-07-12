import React, { Component } from "react";
import { Switch, Route, Link, Redirect, withRouter } from "react-router-dom";
import UserAnchor from "./user_anchor/user_anchor_container";
import ChannelList from "./channel_list/channel_list_container";
import GuildTag from "./guild_tag";
import ChatboxContainer from "./chatbox/chatbox_container";

class Guild extends Component {
	constructor(props) {
		super(props);
		this.currentUser = this.props.currentUser;
		this.state = {
			guildId:
				this.props.match.params.guildId || this.props.currentUser.home.id,
			currentChannel: this.props.match.params.channelId || -1
		};
	}

	componentDidMount() {
		// debugger;
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.guildId !== this.props.match.params.guildId) {
			this.setState({ guildId: this.props.match.params.guildId });
		} else if (prevState.currentChannel !== this.props.match.params.channelId) {
			this.setState({ currentChannel: this.props.match.params.channelId });
		}
		this.forceUpdate;
	}

	render() {
		return (
			<div className="guild-box">
				<div className="guild-bar">
					<GuildTag
						channelId={this.state.channelId}
						guildId={this.props.match.params.guildId}
					/>
					<ChannelList
						channelId={this.state.channelId}
						guildId={this.props.match.params.guildId}
					/>

					<UserAnchor />
				</div>
				<ChatboxContainer
					channelId={this.state.channelId}
					guildId={this.props.match.params.guildId}
					currentUser={this.currentUser}
				/>
				{/* <Switch> */}
				{/* <Route */}
				{/* // path="/home/guilds/:guildId/:channelId"
						// component={ChatboxContainer}
					// /> */}
				{/* <Route path="/home/guilds/:guildId/" component={ChatboxContainer} /> */}
				{/* <Route path="/home/" currentUser="currentUser" /> */}
				{/* </Switch> */}
			</div>
		);
	}
}

export default Guild;
