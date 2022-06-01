import React from 'react';
import {Projects, Item} from './projectStyle';
import Carousel,{consts} from "react-elastic-carousel";

const breakPoints = [
  { width: 1500, itemsToShow: 1 },
  { width: 2000, itemsToShow: 2 },
  { width: 2200, itemsToShow: 3 },
];

const Project = () => {
  return (
    <Projects>
      <h1>Projetos</h1>
      <Carousel 
      breakPoints={breakPoints} 
      easing="cubic-bezier(1,.15,.55,1.54)"
      tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
      transitionMs={700}
      itemPosition={consts.START}>
      
        <Item number="1">
        <h2>Front-End</h2>
          <img src="./images/portfolio.png" alt="" />
          <h3>Portfólio</h3>
          <p>Projeto criado para aprender e praticar conhecimentos do React (components, hooks, dependencias) e mostrar um pouco sobre mim e minhas skills.</p>
          <a href="" _blank>
            <button>Ver</button>
          </a>
        </Item>
        <Item number="2">
        <h2>Front-End</h2>
          <img src="./images/portfolio.png" alt="" />
          <h3>Portfólio</h3>
          <p>Projeto criado para aprender e praticar conhecimentos do React (components, hooks, dependencias) e mostrar um pouco sobre mim e minhas skills.</p>
          <a href="" _blank>
            <button>Ver</button>
          </a>
        </Item>
        <Item number="3">
        <h2>Front-End</h2>
          <img src="./images/portfolio.png" alt="" />
          <h3>Portfólio</h3>
          <p>Projeto criado para aprender e praticar conhecimentos do React (components, hooks, dependencias) e mostrar um pouco sobre mim e minhas skills.</p>
          <a href="" _blank>
            <button>Ver</button>
          </a>
        </Item>
      
      </Carousel>
    </Projects>
  );
};

export default Project;