import React from "react";
import { Route, Link, Switch, Redirect, withRouter } from "react-router-dom";
import ChannelListItem from "./channel_list_item";

class ChannelList extends React.Component {
	constructor(props) {
		super(props);
		this.currentGuild = this.props.currentGuild;
	}

	componentDidMount() {
		this.props.fetchGuild(this.props.guildId);
	}

	//TODO Manage CSS with state from props

	render() {
		return (
			<div className="channel-list-wrapper">
				<ul style={{ width: "100%", paddingTop: "15px" }}>
					{this.props.channels.map(channel => (
						<ChannelListItem
							key={channel.id}
							guildId={this.props.guildId}
							channel={channel}
						/>
					))}
				</ul>
			</div>
		);
	}
}

export default ChannelList;
