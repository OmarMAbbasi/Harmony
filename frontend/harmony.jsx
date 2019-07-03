import React from "react";
import ReactDOM from "react-dom";
import * as SessionAPIUtil from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
	// const store = configureStore();
	const root = document.getElementById("root");
	// ReactDOM.render(<Root store={store} />, root);
	window.signup = SessionAPIUtil.signup;
	window.login = SessionAPIUtil.login;
	window.logout = SessionAPIUtil.logout;

	ReactDOM.render(<h1>ReactIsWorking</h1>);
});
const