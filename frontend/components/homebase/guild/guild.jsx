import React, { Component } from "react";
import { Route, Link, Redirect, withRouter } from "react-router-dom";
import UserAnchor from "./user_anchor/user_anchor_container";

class Guild extends Component {
	constructor(props) {
		super(props);
		this.currentUser = this.props.currentUser;
		this.state = {
			guildId: this.props.match.params.guildId
		};
	}

	componentDidMount() {
		this.props.fetchGuild(this.state.guildId);
	}

	componentDidUpdate(prevProps, prevState) {
		this.state["guildId"] = this.props.match.params.guildId;
		this.props.fetchGuild(this.state.guildId);
	}

	render() {
		return (
			<div>
				<div>
					<div>{this.props.match.params.guildId}</div>
					{/* <ChannelList /> */}
					<UserAnchor />
				</div>
			</div>
		);
	}
}

export default Guild;
