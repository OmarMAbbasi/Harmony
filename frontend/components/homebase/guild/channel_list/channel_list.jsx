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

	render() {
		return (
			<div className='channel-list-wrapper'>
				<ul style={{width:'100%'}}>
					{this.props.channels.map(channel => (
						<ChannelListItem
							key={channel.id}
							style={{ color: "yellow" }}
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
