import React from "react";
import { HomePage, Links } from "./HomeStyle";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Home = () => {
  
	return (
    
		<HomePage id="Home">
			<div>
				<h3>Olá, sou</h3>
				<div className="text-reveal">
					<h1>Mateus Belmonte</h1>
				</div>
				<h3>Desenvolvedor Frontend</h3>
				<Links>		
					<a className="github" href="https://github.com/Mateus1508" target="_blank" rel="noopener noreferrer">
						<FiGithub className="icon"/>
					</a>
					<a className="linkedin" href="https://www.linkedin.com/in/mateus-belmonte" target="_blank" rel="noopener noreferrer">
						<FaLinkedinIn className="icon"/>
					</a>
				</Links>
			</div>
		</HomePage>
	);
};

export default Home;