import React from "react";
import { NavLink, Route, Link } from "react-router-dom";
import GuildContainer from "../guild/guild_container";
import HomeContainer from "../home_container";

const SidebarGuild = ({ guild }) => {
	return (
		<li className="sidebar-list-item">
			<NavLink
				className="sidebar-list-item-wrapper"
				to={`/home/guilds/${guild.id}`}
				id={guild.id}
			>
				{guild.name[0]}
			</NavLink>
		</li>
	);
};

export default SidebarGuild;
