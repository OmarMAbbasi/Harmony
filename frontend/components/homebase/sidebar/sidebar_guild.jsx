import React from "react";
import { NavLink, Route, Link } from "react-router-dom";
import GuildContainer from "../guild/guild_container";
import HomeContainer from "../home_container";

const SidebarGuild = ({ guild }) => {
	return (
		<li style={{ color: "white", background: "pink" }}>
			<NavLink to={`/home/guilds/${guild.id}`} id={guild.id}>
				{guild.name}
			</NavLink>
		</li>
	);
};

export default SidebarGuild;
