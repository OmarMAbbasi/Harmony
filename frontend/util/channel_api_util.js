export const fetchChannel = channelId =>
	$.ajax({
		method: "GET",
		url: `/api/channels/${channelId}`,
	});


export const createChannel = channel =>
	$.ajax({
		method: "POST",
		url: "/api/channels",
		data: { channel }
	});

export const updateChannel = channel =>
	$.ajax({
		method: "POST",
		url: "/api/channels",
		data: { channel }
	});

export const destroyChannel = (channelId) =>
	$.ajax({
		method: "DELETE",
		url: `api/channels/${channelId}`
	});
