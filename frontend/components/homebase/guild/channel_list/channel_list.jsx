import React from "react";
import { Route, Link, Switch, Redirect, withRouter } from "react-router-dom";
import ChannelListItem from "./channel_list_item";

class ChannelList extends React.Component {
	constructor(props) {
		super(props);
		this.currentGuild = this.props.currentGuild;
		this.state = {
			currentChannel: this.props.match.params.channelId
		};
		this.onClick = this.onClick.bind(this);
		// this.loadChat = this.loadChat.bind(this);
		// this.openChannel = this.openChannel.bind(this);
	}

	componentDidMount() {
		if (this.props.channels[0]) {
			this.props.fetchChannel(this.props.channels[0].id);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			!this.props.match.params.channelId &&
			!this.state.currentChannel &&
			this.props.channels[0]
		) {
			this.props.fetchChannel(this.props.channels[0].id);
			this.setState({ currentChannel: this.props.channels[0].id });
			this.props.history.push(
				`/home/guilds/${this.props.guildId}/${this.props.channels[0].id}`
			);
		} else if (this.props.guildId !== prevProps.guildId) {
			this.props.fetchGuild(this.props.guildId);
			this.setState({ currentChannel: undefined });
		}
	}

	loadChat() {
		this.chat.load();
	}

	onClick(e) {
		e.preventDefault();
		let id = e.currentTarget.id;
		this.props.fetchChannel(id);
		this.setState({ currentChannel: id });
	}

	render() {
		if (!this.props.guilds[this.props.guildId]) {
			return null;
		}
		let currentChannel =
			this.props.match.params.channelId || this.state.currentChannel;

		return (
			<div className="channel-list-wrapper">
				<ul style={{ width: "100%", paddingTop: "15px" }}>
					<div>
						{this.props.channels.map(channel => (
							<ChannelListItem
								onClick={this.onClick}
								key={channel.id}
								currentChannel={currentChannel}
								guildId={this.props.guildId}
								channel={channel}
								fetchChannel={this.props.fetchChannel}
							/>
						))}
					</div>
				</ul>
			</div>
		);
	}
}

export default ChannelList;
