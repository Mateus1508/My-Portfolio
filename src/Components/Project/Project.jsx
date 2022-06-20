import React from 'react';
import {Projects, Item} from './projectStyle';



const Project = () => {
  return (
    <Projects id="Project">
      <h1>Projetos</h1>
      <div>
        <Item>
        <img src="./images/portfolio.png" alt="Portfolio" />
        <h2>Front-End</h2>
          <h3>Portfólio</h3>
          <p>Projeto criado para aprender e praticar conhecimentos do React (components, hooks, dependencias) e mostrar um pouco sobre mim e minhas skills.</p>
          <a href="" _blank>
            <button>Código</button>
          </a>
          <a href="" _blank>
            <button>Demo</button>
          </a>
        </Item>
        <Item>
        <img src="./images/portfolio.png" alt="Portfolio" />
        <h2>Front-End</h2>
          <h3>Portfólio</h3>
          <p>Projeto criado para aprender e praticar conhecimentos do React (components, hooks, dependencias) e mostrar um pouco sobre mim e minhas skills.</p>
          <a href="" _blank>
            <button>Código</button>
          </a>
          <a href="" _blank>
            <button>Demo</button>
          </a>
        </Item>
        <Item>
        <img src="./images/portfolio.png" alt="Portfolio" />
        <h2>Front-End</h2>
          <h3>Portfólio</h3>
          <p>Projeto criado para aprender e praticar conhecimentos do React (components, hooks, dependencias) e mostrar um pouco sobre mim e minhas skills.</p>
          <a href="" _blank>
            <button>Código</button>
          </a>
          <a href="" _blank>
            <button>Demo</button>
          </a>
        </Item>
       
      </div>
    </Projects>
  );
};

export default Project;