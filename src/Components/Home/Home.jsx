import React from 'react';

import { HomePage} from './HomeStyle';

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
      <img className="perfil" src="./images/Perfil.jpg" alt="Mateus, Foto de perfil" />   
      <a className="linkedin" href="https://www.linkedin.com/in/mateus-belmonte-64b6b11a3/" target="_blank" rel="noopener noreferrer">
      <img src="./images/linkedin.png" alt="LinkedIn" />
      </a>
      <a className="github" href="https://github.com/Mateus1508" target="_blank" rel="noopener noreferrer">
      <img src="./images/github.png" alt="Github" />
      </a>
    </HomePage>
  );
};

export default Home;