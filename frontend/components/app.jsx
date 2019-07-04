import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import LandingContainer from './landing/landing'
import RegisterContainer from "./auth/register_container";
import LoginContainer from "./auth/login_container";

const App = () => (
	<div>
		<Route exact path='/' component={LandingContainer}/>
		<Route exact path='/login' component={LoginContainer}/>
		<Route exact path='/register' component={RegisterContainer}/>
	</div>
);

export default App;
