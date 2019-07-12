# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

- ...

# Project Title

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Billie Thompson** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

# EasyTrade

EasyTrade, a Robinhood clone, is an investing application that allows users to purchase and sell shares of stock in publicly-traded companies

[Live Demo](http://harmony-gg.herokuapp.com/#/)

## Technologies

- Backend: Rails/ActiveRecord/PostgreSQL/ActionCable
- Frontend: React/Redux

## Features

- End to end encryption for user authentication via BCrypt
- Spalsh page and authentication has multiple low barrier forms of entry.
- User has access to Guilds that house other Users and Channels for communicaiton via text.
- User has access to Channels inside Guilds.
- User can navigate between channels and guilds with visual feedback

### Splash, Registration, and Login

When a username logs in they are taken to a personal Home guild. Joining has a low barrier of entry.
<br />
<br />
<img src="./app/assets/images/dashboard.gif" align="center" />
<br />
<br />

Much of the logic here had to be very conditional to flow well. Each field had to be broken down into its own
separate component that coud modularly be moved around and routed to while maintaining its local state as the context changed.

```js
	render() {
		const usernameField = (
			<div className="field-wrapper">
				<h5 className="field-label">USERNAME:</h5>
				<input
					className="auth-field"
					type="text"
					value={this.state.username}
					onChange={this.update("username")}
				/>
			</div>
		);

		const emailField = (
			<div className="field-wrapper">
				<h5 className="field-label">EMAIL:</h5>
				<input
					className="auth-field"
					type="text"
					value={this.state.email}
					onChange={this.update("email")}
				/>
			</div>
		);

		const passwordField = (
			<div className="field-wrapper">
				<h5 className="field-label">PASSWORD:</h5>
				<input
					className="auth-field"
					type="password"
					value={this.state.password}
					onChange={this.update("password")}
				/>
			</div>
        );
```

##Open Harmony
The Open Harmony button functions differently depending on whether the User has a valid session token or not

If they are not logged , it will open a field that allows them to enter a Usernames are not unique,but are randomly assigned a 4 digit discriminator. That way a User can always get their favorite name.

       ```js
       openUsernameField(e) {
    	e.preventDefault();
    	this.setState({ opened: true });
    };

    ```

### Guilds and Channels

```js
As users navigate through thier guilds and channels, the view updates dynamically with visual feedback
```

# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

- ...

# Project Title

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Billie Thompson** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

# EasyTrade

EasyTrade, a Robinhood clone, is an investing application that allows users to purchase and sell shares of stock in publicly-traded companies

[Live Demo](http://harmony-gg.herokuapp.com/#/)

## Technologies

- Backend: Rails/ActiveRecord/PostgreSQL/ActionCable
- Frontend: React/Redux

## Features

- End to end encryption for user authentication via BCrypt
- Spalsh page and authentication has multiple low barrier forms of entry.
- User has access to Guilds that house other Users and Channels for communicaiton via text.
- User has access to Channels inside Guilds.
- User can navigate between channels and guilds with visual feedback

### Splash, Registration, and Login

When a username logs in they are taken to a personal Home guild. Joining has a low barrier of entry.
<br />
<br />
<img src="./app/assets/images/dashboard.gif" align="center" />
<br />
<br />

#### Modular and Persistent Fields

Much of the logic here had to be very conditional to flow well. Each field had to be broken down into its own
separate component that coud modularly be moved around and routed to while maintaining its local state as the context changed.

```js
render() {
	const usernameField = (
		<div className="field-wrapper">
			<h5 className="field-label">USERNAME:</h5>
			<input
				className="auth-field"
				type="text"
				value={this.state.username}
				onChange={this.update("username")}
			/>
		</div>
	);
	const emailField = (
		<div className="field-wrapper">
			<h5 className="field-label">EMAIL:</h5>
			<input
				className="auth-field"
				type="text"
				value={this.state.email}
				onChange={this.update("email")}
			/>
		</div>
	);
	const passwordField = (
		<div className="field-wrapper">
			<h5 className="field-label">PASSWORD:</h5>
			<input
				className="auth-field"
				type="password"
				value={this.state.password}
				onChange={this.update("password")}
			/>
		</div>
    );
```

#### Open Harmony

The Open Harmony button functions differently depending on whether the User has a valid session token or not

If they are not logged , it will open a field that allows them to enter a Usernames are not unique,but are randomly assigned a 4 digit discriminator. That way a User can always get their favorite name.

```js
openUsernameField(e) {
	e.preventDefault();
	this.setState({ opened: true });
};

```

Otherwise it will redirect the User to their home. The largest challenge here was making sure the logic functions with elegant CSS logic as well

```js
function OpenButton({ openUsernameField, currentUser }) {
	if (!currentUser) {
		return (
			<button className="open-button" onClick={openUsernameField}>
				Open Harmony
			</button>
		);
	} else {
		return (
			<button className="open-button">
				<Link style={{ color: "white" }} to={`/home/`}>
					Open Harmony
				</Link>
			</button>
		);
	}
}
```

### Guilds and Channels

As users navigate through thier guilds and channels, the view updates dynamically with visual feedback. As they navigate through, there is visual feedback as to which Guild or Channel they are hovering over or currently in.

Each guild and channel has a websocket so the user can see what updates inside each in realtime.L0

```rb
  def subscribed
    @channel = Channel.find(params[:id])
    stream_for @channel
  end

  def speak(data)
    message = @channel.messages.new(body: data['message'], author_id: data['authorId'] )
    if message.save
      socket = { messages: message, users: message.author, channels: message.channel, type: 'message' }
      ChannelChannel.broadcast_to(@channel, socket)
    end
  end

  def load
    messages = @channel.messages
    if messages
      socket = { messages: messages, type: 'messages' }
    else
      socket = { messages: null, type: 'no
        messages'}
    end
    ChannelChannel.broadcast_to(@channel, socket)
  end
```

#### Websockets

The largest challenge here was making sure properties were loaded and threaded through properly. During initial development I didn't have any knowledge of websockets and ActionCable.

Eventually to create the functionality to smoothly connect to each, I had to go back and refactor so on User login,a socket is generated for each Guild in their sidebar. When clicking on a channel in a guild, a socket will be generated for the channel itself.

This was a very time consuming setback and slowed down development of the project, but I absolutely learned the value of understanding the tech you plan on implementing before you start planning.

I also learned that sometimes you just have to accept something doesn't work and go back and fix it rather than powering through with code that isn't scalable.

```js
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
```
#### ChatBox

The field at the bottom of the chatbox is connected to the channel's websocket directly. Currently the messages that flow via the socket are not visible. 

