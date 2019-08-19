import React from "react";

export default function messageItem(props) {
	const authorId = props.message.authorId;
	const author = getState().entities.users[authorId];
	const sentAt = new Date(props.message.createdAt);
	if (!author) {
		return null;
	}
	let web = /https:\/\//;
	let email = /@gmail/;
	let mess;
	if (web.test(props.message.body)) {
		mess = (
			<a href={props.message.body} className="message-body-link">
				{props.message.body}
			</a>
		);
	} else if (email.test(props.message.body)) {
		mess = (
			<a href="mailto:omarmabbasi@gmail.com" className="message-body-link">
				{props.message.body}
			</a>
		);
	} else {
		mess = <span className="message-body">{props.message.body}</span>;
	}
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
			<div className="message-body-wrapper">{mess}</div>
		</li>
	);
}
