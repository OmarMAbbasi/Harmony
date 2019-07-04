export const login = user =>
	$.ajax({
		method: "POST",
		url: "/api/session",
		data: { user }
	});

export const register = user =>
	$.ajax({
		method: "POST",
		url: "/api/users",
		data: { user }
	});

export const claim = user =>
	$.ajax({
		url: `api/user/${user.id}`,
		method: "PATCH",
		data: { user }
	});

export const abandon = id =>
	$.ajax({
		url: `api/user/${id}`,
		method: "DELETE"
	});

export const logout = () =>
	$.ajax({
		method: "DELETE",
		url: "api/session"
	});
