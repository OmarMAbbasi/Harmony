import React, { Component } from "react";
import { cableMessage } from "../../../../actions/message_actions";

class Chatbox extends Component {
	constructor(props) {
		super(props);
		this.state = { messages: [] };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.update = this.update.bind(this);
		this.openChannel = this.openChannel.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.updateLog = this.updateLog.bind(this);

		this.state = {
			currentChannel: this.props.match.params.channelId,
			body: ""
		};
		this.chat;
	}

	// componentDidMount() {
	// 	let id = this.state.channelId
	// 	this.chat = App.cable.subscriptions.create(
	// 		{ channel: "ChannelChannel", id: id },
	// 		{
	// 			received: data => {
	// 				this.updateLog(data);
	// 			},
	// 			load: function() {
	// 				return this.perform("load");
	// 			},
	// 			speak: function(data) {
	// 				return this.perform("speak", data);
	// 			}
	// 		}
	// 	);
	// }

	update(e) {
		this.setState({ body: e.target.value });
	}

	// updateLog(data) {
	// 	if (data.type === "message") {
	// 		this.props.cableMessage(data);
	// 	} else if (data.type === "messages") {
	// 		this.props.cableMessages();
	// 	}
	// }
	openChannel() {
		if (!this.props.guilds[this.props.guildId]) {
			return null;
		}
		let id = this.props.match.params.channelId || this.state.currentChannel;
		if (!id) {
			id = this.props.channels[0].id;
		}

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

	handleSubmit(e) {
		e.preventDefault();
		this.chat.speak({ message: "somemessage", authorId: 1 });
		this.setState({ body: "" });
	}

	// componentDidMount() {
	// 	let id = this.state.channelId;
	// 	this.chat = App.cable.subscriptions.create(
	// 		{ channel: "ChannelChannel", id: id },
	// 		{
	// 			received: data => {
	// 				switch (data.type) {
	// 					case "message":
	// 						this.setState({
	// 							messages: this.state.messages.concat(data.message)
	// 						});
	// 						break;
	// 					case "messages":
	// 						this.setState({ messages: data.messages });
	// 						break;
	// 				}
	// 			},
	// 			load: function() {
	// 				return this.perform("load");
	// 			},
	// 			speak: function(data) {
	// 				return this.perform("speak", data);
	// 			}
	// 		}
	// 	);
	// }

	componentDidUpdate(prevProps, prevState) {
		if (
			!this.props.match.params.channelId &&
			!this.state.currentChannel &&
			this.props.channels[0]
		) {
			console.log("first channel");
			this.props.fetchChannel(this.props.channels[0].id);
			this.setState({ currentChannel: this.props.channels[0].id });
		} else if (this.props.guildId !== prevProps.guildId) {
			console.log("reset channel");

			this.props.fetchGuild(this.props.guildId);
			this.setState({ currentChannel: undefined });
		}
		this.openChannel();
	}

	render() {
		return (
			<div className="channel-box">
				<div className="channel-header">
					<div></div>
				</div>
				<div className="channel-content">
					<div className="chat-content">
						<div className="message-box">Messages</div>
						<form onSubmit={this.handleSubmit} className="message-form">
							<div className="message-form-wrapper">
								<div className="message-form-input-area">
									<div className="message-inner-form">
										<textarea
											value={this.state.body}
											onChange={this.update}
											className="message-text-area"
										></textarea>
									</div>
								</div>
							</div>
						</form>
						<button className="hidden" type="submit" value="Submit" />
					</div>
					<div style={{ display: "none" }}>FriendList</div>
				</div>
			</div>
		);
	}
}

export default Chatbox;
