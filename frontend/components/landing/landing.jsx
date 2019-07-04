//Library Imports
import React from "react";
import { Link } from "react-router-dom";

//Local Imports
import Navbar from "./navbar";
import Splash from "./splash_component";
import Footer from "./footer";

const Landing = ({ currentUser }) => {
	return (
		<div>
			<Navbar />
			<Splash />
			<Footer />
		</div>
	);
};

export default Landing;
