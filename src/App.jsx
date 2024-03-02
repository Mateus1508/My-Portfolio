import React,{useEffect} from "react"; 
import AOS from "aos";
import "aos/dist/aos.css";

import { GlobalStyles } from "./GlobalStyles";
import Home from "./Components/Home/Home";
import Experiences from "./Components/Experiences/Experiences";
import Skill from "./Components/Skill/Skill";
import Contact from "./Components/Contact/Contact";
import Project from "./Components/Project/Project";
import Nav from "./Components/Nav/Nav";
import AboutMe from "./Components/AboutMe/AboutMe";

function App() { 
	useEffect(() => {AOS.init({duration: 1200});},[]);
	return (
		<>
			<GlobalStyles />
			<Nav />
			<Home />
			<AboutMe />
			<Experiences />
			<Skill />
			<Project />
			<Contact />
		</>
	);
}


export default App; 
