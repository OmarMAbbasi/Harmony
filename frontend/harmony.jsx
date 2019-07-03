import React from "react";
import ReactDOM from "react-dom";
import * as SessionAPIUtil from "./util/session_api_util";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	const store = configureStore();
	ReactDOM.render(<h1>ReactIsWorking</h1>, root);
	// ReactDOM.render(<Root store={store} />, root);

	//Temporary Window Debugger methods
	window.signup = SessionAPIUtil.signup;
	window.login = SessionAPIUtil.login;
	window.logout = SessionAPIUtil.logout;
	window.getState = store.getState;
	window.dispatch = store.dispatch;
});
