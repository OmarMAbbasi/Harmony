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
		this.updateLog = this.updateLog.bind(this);
		this.addMessage = this.addMessage.bind(this);
		this.loadChat = this.loadChat.bind(this);
		this.state = {
			messages: props.messages || [],
			currentChannel: this.props.match.params.channelId,
			body: "",
			openedChannel: -1,
			loaded: false
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

	updateLog(data) {
		if (data.type === "message") {
			this.props.cableMessage(data);
		} else if (data.type === "messages") {
			this.props.cableMessages();
		}
	}

	openChannel() {
		let id = this.props.match.params.channelId;
		if (!id) {
			return null;
		}
		this.chat = App.cable.subscriptions.create(
			{ channel: "ChannelChannel", id: id },
			{
				received: data => {
					this.updateLog(data);
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

	handleSubmit() {
		this.chat.speak({ message: "somemessage", authorId: 1 });
		this.setState({ body: "" });
	}

	addMessage(e) {
		if (e.keyCode == 13 && e.shiftKey == false) {
			this.handleSubmit();
		}
	}

	componentDidMount() {}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.openedChannel !== this.props.match.params.channelId) {
			this.openChannel();
			this.setState({
				loaded: false,
				openedChannel: this.props.match.params.channelId
			});
		}
		if (this.chat && !this.state.loaded) {
			this.loadChat();
			this.setState({ loaded: true });
		}
	}

	loadChat() {
		this.chat.load();
	}

	render() {
		if (!this.props.match.params.channelId) {
			return null;
		}
		let messages = this.props.messages || [];
		this.props.messages.map(message => console.log(message));
		return (
			<div className="channel-box">
				<div className="channel-header">
					<div></div>
				</div>
				<div className="channel-content">
					<div className="chat-content">
						<div className="message-box">
							{this.props.messages.map(message => console.log(message))}
						</div>
						<form onSubmit={this.handleSubmit} className="message-form">
							<div className="message-form-wrapper">
								<div className="message-form-input-area">
									<div className="message-inner-form">
										<textarea
											id="chat"
											onKeyDown={this.addMessage}
											onSubmit={this.handleSubmit}
											value={this.state.body}
											onChange={this.update}
											className="message-text-area"
										></textarea>
									</div>
								</div>
							</div>
							<button className="hidden" type="submit" value="chat" />
						</form>
					</div>
					<div style={{ display: "none" }}>FriendList</div>
				</div>
			</div>
		);
	}
}

export default Chatbox;
