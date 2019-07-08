import React from "react";
import { Switch, Router, Route, Link } from "react-router-dom";

import LandingContainer from "./landing/landing";
import HomeContainer from "./home/home_container";
import RegisterContainer from "./auth/register_container";
import LoginContainer from "./auth/login_container";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
	<div>
		<Switch>
			<AuthRoute exact path="/login" component={LoginContainer} />
			<AuthRoute exact path="/register" component={RegisterContainer} />
			<ProtectedRoute path="/home" component={HomeContainer} />
			<Route path="/" component={LandingContainer} />
		</Switch>
	</div>
);

export default App;
