import React from "react";
import { Route, Link, Switch, Redirect, withRouter } from "react-router-dom";

class ChannelList extends React.Component {
	constructor(props) {
		super(props);
		this.currentGuild = this.props.currentGuild;
	}


	render() {
		if (!this.currentGuild) {
			this.currentGuild = {};
			this.currentGuild.channels = [];
		}
		return (
			<div style={{ width: "72px" }}>
				<div>{this.currentGuild.name}</div>
				<ul>
					{this.currentGuild.channels.map(channel => {
						<li>{channel.id}</li>;
					})}
				</ul>
			</div>
		);
	}
}

export default ChannelList;
