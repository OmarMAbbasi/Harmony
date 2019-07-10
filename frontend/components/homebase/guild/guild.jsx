import React, { Component } from "react";
import { Route, Link, Redirect, withRouter } from "react-router-dom";
import UserAnchor from "./user_anchor/user_anchor_container";
import ChannelList from "./channel_list/channel_list_container";

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
		// debugger;
		return (
			<div>
				<div>
					<div>{this.props.match.params.guildId}</div>
					<ChannelList guildId={this.props.match.params.guildId} />
					<UserAnchor />
				</div>
			</div>
		);
	}
}

export default Guild;
