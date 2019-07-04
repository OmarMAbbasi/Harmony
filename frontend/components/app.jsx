import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import LandingContainer from './landing/landing'

const App = () => (
	<div>
		<Route exact path='/' component={LandingContainer}/>
	</div>
);

export default App;
