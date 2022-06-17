import React from 'react';
import {Projects, Item} from './projectStyle';



const Project = () => {
  return (
    <Projects id="Project">
      <h1>Projetos</h1>
     
        <Item>
        <h2>Front-End</h2>
          <img src="./images/portfolio.png" alt="" />
          <h3>Portfólio</h3>
          <p>Projeto criado para aprender e praticar conhecimentos do React (components, hooks, dependencias) e mostrar um pouco sobre mim e minhas skills.</p>
          <a href="" _blank>
            <button>Ver</button>
          </a>
        </Item>
        <Item>
        <h2>Front-End</h2>
          <img src="./images/portfolio.png" alt="" />
          <h3>Portfólio</h3>
          <p>Projeto criado para aprender e praticar conhecimentos do React (components, hooks, dependencias) e mostrar um pouco sobre mim e minhas skills.</p>
          <a href="" _blank>
            <button>Ver</button>
          </a>
        </Item>
        <Item>
        <h2>Front-End</h2>
          <img src="./images/portfolio.png" alt="" />
          <h3>Portfólio</h3>
          <p>Projeto criado para aprender e praticar conhecimentos do React (components, hooks, dependencias) e mostrar um pouco sobre mim e minhas skills.</p>
          <a href="" _blank>
            <button>Ver</button>
          </a>
        </Item>
      
      
    </Projects>
  );
};

export default Project;