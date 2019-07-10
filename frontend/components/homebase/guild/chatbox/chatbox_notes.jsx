class ChatRoom extends React.Component {
	constructor(props) {
		super(props);
		// this.state = { messages: [] }; Get messages from state
		// this.bottom = React.createRef(); ???
	}
	//TODO Sockets Here
	// componentDidMount() { //** Use Redux to dispatch messages out and maintain messageList */
	//!     App.cable.subscriptions.subscriptions[0].load(); => loads all messages.
	// 	App.cable.subscriptions.create(
	// 		{ channel: "ChatChannel" },
	// 		{
	// 			received: data => {
	// 				this.setState({
	// 					messages: this.state.messages.concat(data.message)
	// 				});
	// 			},
	// 			speak: function(data) {
	// 				return this.perform("speak", data);
	// 			}
	// 		}
	// 	);
	// }
	// ** Channel: We create a subscription to the ChatChannel channel. Note that the client only has to invoke this function and create a subscription once. Until the client unsubscribes, this subscription to the ChatChannel will persist.
	// ** Received: When the client is subscribed, they will be listening to the Channel’s stream for any new data. When data is transmitted into the stream via the broadcast method called in the back end, this received function will be invoked.
	// ** Speak: This function sends data to the back end. Recall in our chat_channel.rb file, we also have a method named speak. While these are two distinct functions, calling speak on the frontend, in turn invokes speak on the back end through the App.cable’ s perform function.

	// componentDidUpdate() {
	// 	this.bottom.current.scrollIntoView(); //scrolls down
	// }
	//TODO Map through MessageItem presentational components
	// render() {
	// 	const messageList = this.state.messages.map(message => {
	// 		return (
	// 			<li key={message.id}>
	// 				{message}
	// 				<div ref={this.bottom} />
	// 			</li>
	// 		);
	// 	});
	// 	return (
	// 		<div className="chatroom-container">
	// 			<div>ChatRoom</div>
	// 			<div className="message-list">{messageList}</div>
	// 			<MessageForm /> //** Message Form Component for submitting messages
	// 		</div>
	// 	);
	// }
}

export default ChatRoom;
