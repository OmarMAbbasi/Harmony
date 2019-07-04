import React from "react";

export default class StringInput extends React.PureComponent {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onChange && this.props.onChange(e.target.value);
	}
	render() {
		const { className, value } = this.props;
		return (
			<input
				className={className}
				type="text"
				value={value}
				onChange={this.handleChange}
			/>
		);
	}
}

// const Username = (props) => {
// 	debugger;
// 	<label>
// 		USERNAME:
// 		<input type={"text"} value={username} onChange={props.update(username)} />
// 	</label>;
// };

// export default Username;

// const emailField = (
// 	<label>
// 		EMAIL:
// 		<input
// 			type="text"
// 			value={this.state.email}
// 			onChange={this.update("email")}
// 		/>
// 	</label>
// );

// const passwordField = (
// 	<label>
// 		PASSWORD:
// 		<input
// 			type="password"
// 			value={this.state.password}
// 			onChange={this.update("password")}
// 		/>
// 	</label>
// );
