import React from 'react';
import { HomePage } from './HomeStyle';
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
        <h3>desenvolvedor Frontend</h3>
      </div>
      <img className="perfil" src="https://github.com/Mateus1508.png" alt="Mateus, Foto de perfil"/>   
      <a className="linkedin" href="https://www.linkedin.com/in/mateus-belmonte-64b6b11a3/" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn className="icon"/>
      </a>
      <a className="github" href="https://github.com/Mateus1508" target="_blank" rel="noopener noreferrer">
      <FiGithub className="icon"/>
      </a>
    </HomePage>
  );
};

export default Home;