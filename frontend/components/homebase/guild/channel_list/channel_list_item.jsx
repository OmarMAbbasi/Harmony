import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const ChannelIndexItem = ({ guildId, channel }) => {
	return (
		<li className="channel-item-container">
			<div className="channel-item-content">
				<img
					id="hashTag"
					className="channel-item-hash"
					src={window.images.hashTag}
				/>
				<NavLink
					to={`/home/guilds/${guildId}/${channel.id}`}
					guild_id={guildId}
					channel_id={channel.id}
				>
					{channel.name}
				</NavLink>
			</div>
		</li>
	);
};

export default withRouter(ChannelIndexItem);
