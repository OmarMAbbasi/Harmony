export const fetchGuild = guildId =>
	$.ajax({
		method: "GET",
		url: `/api/guilds/${guildId}`,
	});


export const createGuild = guild =>
	$.ajax({
		method: "POST",
		url: "/api/guilds",
		data: { guild }
	});

export const updateGuild = guild =>
	$.ajax({
		method: "POST",
		url: "/api/guilds",
		data: { guild }
	});

export const destroyGuild = (guildId) =>
	$.ajax({
		method: "DELETE",
		url: `api/guilds/${guildId}`
	});
