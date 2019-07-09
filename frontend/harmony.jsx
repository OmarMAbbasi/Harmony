import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";

//Testing
import * as SessionAPIUtil from "./util/session_api_util";
import configureStore from "./store/store";
import { fetchGuild } from './util/guild_api_util';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");

	let store
	if (window.currentUser) {
		const preloadedState = {
			entities: {
				users: { [window.currentUser.id]: window.currentUser }
			},
			session: { id: window.currentUser.id }
		};
		store = configureStore(preloadedState);
		delete window.currentUser;
	} else {
		store = configureStore();
	}
	ReactDOM.render(<Root store={store} />, root);
	//Temporary Window Debugger methods
	window.register = SessionAPIUtil.register;
	window.login = SessionAPIUtil.login;
	window.logout = SessionAPIUtil.logout;
	window.getState = store.getState;
	window.dispatch = store.dispatch;
	window.fetchGuild = fetchGuild;
});
