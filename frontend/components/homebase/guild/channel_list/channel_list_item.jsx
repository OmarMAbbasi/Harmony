import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const ChannelIndexItem = ({ guildId, channel }) => {
	return (
		<li className="channel-item-container">
			<NavLink
				className="channel-item-content"
				to={`/home/guilds/${guildId}/${channel.id}`}
				guild_id={guildId}
				channel_id={channel.id}
			>
				<img
					id="hashTag"
					className="channel-item-hash"
					src={window.images.hashTag}
				/>
				{channel.name}
			</NavLink>
		</li>
	);
};

export default withRouter(ChannelIndexItem);
