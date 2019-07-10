import React from "react";
import { Route, Link, Switch, Redirect, withRouter } from "react-router-dom";

class ChannelList extends React.Component {
	constructor(props) {
		super(props);
		this.currentGuild = this.props.currentGuild;
	}

	componentDidMount() {
		this.props.fetchGuild(this.props.guildId);
	}

	render() {
		debugger;
		return (
			<div style={{ width: "72px" }}>
				<ul>
					{this.props.channels.map(channel => (
						<li style={{ color: "yellow" }}>{channel.id}</li>	
					))}
				</ul>
			</div>
		);
	}
}

export default ChannelList;
