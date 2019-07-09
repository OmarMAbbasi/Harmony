export const show = channelId =>
	$.ajax({
		method: "GET",
		url: `/api/channels/${channelId}`,
	});


export const create = channel =>
	$.ajax({
		method: "POST",
		url: "/api/channels",
		data: { channel }
	});

export const update = channel =>
	$.ajax({
		method: "POST",
		url: "/api/channels",
		data: { channel }
	});

export const destroy = (channel.id) =>
	$.ajax({
		method: "DELETE",
		url: `api/channels/${channelId}`
	});
