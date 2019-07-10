import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const ChannelIndexItem = ({ guildId, channel }) => {
	return (
		<li>
			<NavLink
				to={`/home/guilds/${guildId}/${channel.id}`}
				guild_id={guildId}
				channel_id={channel.id}
			>
				{channel.name}
			</NavLink>
		</li>
	);
};

export default withRouter(ChannelIndexItem);
