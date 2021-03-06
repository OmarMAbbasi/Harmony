//Library Imports
import React from "react";
import { Link, } from "react-router-dom";

//Local Imports
import Navbar from "./navbar/navbar_container";
import Splash from "./splash/splash_container";
import Footer from "./footer/footer_container";

const Landing = ({currentUser}) => {
	return (
		<div  className="landing" >
			<Navbar />
			<Splash currentUser={currentUser}/>
			<Footer />
		</div>
	);
};

export default Landing;
