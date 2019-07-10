import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
	return {
		currentGuildId: ownProps.guildId,
		currentGuild: state.entities.guilds[ownProps.guildId]
	};
};

class GuildTag extends React.Component {
	render() {
		let name = "";
		if (this.props.currentGuild) {
			name = this.props.currentGuild.name;
		}
		return (
			<div>
				<div className="guild-tag-container">
					<span className="guild-tag">{name}</span>
					<img
						src={window.images.dropdownArrow}
						className="guild-tag-dropdown-arrow"
					/>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(GuildTag);
