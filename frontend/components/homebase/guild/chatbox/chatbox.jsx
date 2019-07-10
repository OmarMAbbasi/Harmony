import React, { Component } from "react";

class Chatbox extends Component {
	constructor(props) {
		super(props);
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
										<textarea className="message-text-area"></textarea>
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