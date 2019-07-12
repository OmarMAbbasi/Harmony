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
		this.loadChat = this.loadChat.bind(this);
		this.openChannel = this.openChannel.bind(this);
	}

	componentDidMount() {
		this.props.fetchGuild(this.props.guildId);
	}


	componentDidUpdate(params, params2) {
		let id = this.state.currentChannel;
		if (id) {
			this.openChannel(id);
		}
		else {
			console.log()
		}
		// if (this.match) {
		// 	id = this.match.params.channelId;
		// 	this.openChannel(id);
		// 	this.loadChat();
		// }
	}

	loadChat() {
		this.chat.load();
	}

	onClick(e) {
		e.preventDefault();
		let id = e.currentTarget.id;
		this.props.fetchChannel(id);
		this.setState({ currentChannel: id });
		// this.forceUpdate();
	}

	openChannel(id) {
		this.chat = App.cable.subscriptions.create(
			{ channel: "ChannelChannel", id: id },
			{
				received: data => {
					switch (data.type) {
						case "message":
							this.setState({
								messages: this.state.messages.concat(data.message)
							});
							break;
						case "messages":
							this.setState({ messages: data.messages });
							break;
					}
				},
				load: function() {
					return this.perform("load");
				},
				speak: function(data) {
					return this.perform("speak", data);
				}
			}
		);
	}

	render() {
		let currentChannel =
			this.props.match.params.channelId || this.state.currentChannel;
		// if (!currentChannel && this.props.channels[0]) {
		// 	let channel = this.props.channels[0];
		// 	currentChannel = channel.id;
		// }

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
