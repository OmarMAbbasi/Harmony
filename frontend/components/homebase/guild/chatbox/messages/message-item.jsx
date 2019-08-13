import React from "react";

export default function messageItem(props) {
	const authorId = props.message.authorId;
	const author = getState().entities.users[authorId];
	const sentAt = new Date(props.message.createdAt);
	debugger;
	return (
		<li className="message-wrapper">
			<div className="message-header-wrapper">
				<div className="user-avatar-wrapper">
					<div style={{ margin: "-2px 20px 20px" }}>
						<div className="message-user-profile-pic-wrapper">
							<img
								className="user-avatar-image"
								src={window.images.defaultProfile}
							/>
						</div>
					</div>
				</div>
				<span className="message-header">
					<span className="author-username">{author.username}</span>
					<time
						className="message-timestamp"
						dateTime={props.message.createdAt}
					>
						{sentAt.toLocaleDateString()} at {sentAt.toLocaleTimeString()}
					</time>
				</span>
			</div>
			<div className="message-body-wrapper">
				<span className="message-body">{props.message.body}</span>
			</div>
		</li>
	);
}
