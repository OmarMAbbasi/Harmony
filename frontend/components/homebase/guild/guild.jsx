import React, { Component } from "react";
import { Route, Link, Redirect, withRouter } from "react-router-dom";
import UserAnchor from "./user_anchor/user_anchor_container";
import ChannelList from "./channel_list/channel_list_container";
import GuildTag from "./guild_tag";

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
				<div className="channel-box">
					<div className="channel-header">
						<div>Channel Title</div>
					</div>
					<div className="channel-content">
						<div className="chat-content">
							<div className="message-box">Messages</div>
							<form className="message-form">
								<div className="message-form-wrapper">
									<div className="message-form-input-area">
										<div className="message-inner-form">
											<textarea className="message-text-area"></textarea>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div style={{ display: "none" }}>FriendList</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Guild;
