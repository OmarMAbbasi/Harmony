import React, { Component } from "react";
import { cableMessage } from "../../../../actions/message_actions";

class Chatbox extends Component {
	constructor(props) {
		super(props);
		this.state = { messages: [] };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.update = this.update.bind(this);
		this.updateLog = this.updateLog.bind(this);
		this.state = {
			channelId: props.match.params.channelId,
			body: ""
		};
	}

	componentDidMount() {
		let id = this.state.channelId
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
	// openChannel(id) {
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

	handleSubmit(e) {
		e.preventDefault();
		this.chat.speak({ message: "somemessage", authorId: 1 });
		this.setState({ body: "" });
	}

	componentDidMount() {
		let id = this.state.channelId;
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
						<input type="submit" value="Submit" />
					</div>
					<div style={{ display: "none" }}>FriendList</div>
				</div>
			</div>
		);
	}
}

export default Chatbox;
