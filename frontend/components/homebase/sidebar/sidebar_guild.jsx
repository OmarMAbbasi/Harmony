import React from "react";
import { NavLink, Route, Link } from "react-router-dom";
import GuildContainer from "../guild/guild_container";
import HomeContainer from "../home_container";

const SidebarGuild = ({ guild, activeGuildId }) => {
	let css = "sidebar-list-item-wrapper";
	if (activeGuildId == guild.id) {
		css = "sidebar-list-item-wrapper-focus";
	}
	return (
		<NavLink className={css} to={`/home/guilds/${guild.id}`} id={guild.id}>
			{guild.name[0]}
		</NavLink>
	);
};

export default SidebarGuild;
