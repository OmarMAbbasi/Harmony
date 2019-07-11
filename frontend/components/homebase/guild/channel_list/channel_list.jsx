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
	}

	componentDidMount() {
		this.props.fetchGuild(this.props.guildId);
	}

	onClick() {}

	//TODO Manage CSS with state from props

	render() {
		let currentChannel = this.props.channels[0];
		if (this.props.channels[0]) {
			currentChannel = this.state.currentChannel || this.props.channels[0].id;
		}
		return (
			<div className="channel-list-wrapper">
				<ul style={{ width: "100%", paddingTop: "15px" }}>
					{this.props.channels.map(channel => (
						<ChannelListItem
							key={channel.id}
							currentChannel={currentChannel}
							guildId={this.props.guildId}
							channel={channel}
							fetchChannel={this.props.fetchChannel}
						/>
					))}
				</ul>
			</div>
		);
	}
}

export default ChannelList;
