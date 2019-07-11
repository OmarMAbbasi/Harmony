import React, { Component } from "react";

class Chatbox extends Component {
	constructor(props) {
		super(props);
		this.state = { messages: [] };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.chat = App.cable.subscriptions.create(
			{ channel: "ChannelChannel", id: 12 },
			{
				received: data => {
					this.setState({
						messages: this.state.messages.concat(data.message)
					});
				},
				speak: function(data) {
					return this.perform("speak", data);
				}
			}
		);
	}

	handleSubmit(e) {
		e.preventDefault();
		if (e.keyCode == 13 && e.shiftKey == false) {
			this.chat.speak({ message: "somemessage", authorId: 1 });
			this.setState({ body: "" });
		}
	}

	render() {
		return (
			<div className="channel-box">
				<div className="channel-header">
					<div>Channel Title</div>
				</div>
				<div className="channel-content">
					<div className="chat-content">
						<div className="message-box">Messages</div>
						<form className="message-form">
							<div className="message-form-wrapper">
								<div className="message-form-input-area">
									<div className="message-inner-form">
										<textarea
											onKeyDown={this.handleSubmit}
											className="message-text-area"
										></textarea>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div style={{ display: "none" }}>FriendList</div>
				</div>
			</div>
		);
	}
}

export default Chatbox;
