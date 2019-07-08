export const create = user =>
	$.ajax({
		method: "POST",
		url: "/api/session",
		data: { user }
	});

export const update = user =>
	$.ajax({
		method: "POST",
		url: "/api/users",
		data: { user }
	});

// export const claim = user =>
// 	$.ajax({
// 		url: `api/user/${user.id}`,
// 		method: "PATCH",
// 		data: { user }
// 	});

// export const abandon = id =>
// 	$.ajax({
// 		url: `api/user/${id}`,
// 		method: "DELETE"
// 	});

export const destroy = () =>
	$.ajax({
		method: "DELETE",
		url: "api/session"
	});
