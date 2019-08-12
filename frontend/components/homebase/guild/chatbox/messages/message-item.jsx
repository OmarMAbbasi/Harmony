import React from "react";

export default function messageItem(props) {
	return <li className="message-wrapper">{props.message.body}</li>;
}
