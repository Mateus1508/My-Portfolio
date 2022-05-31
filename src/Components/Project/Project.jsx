import React from 'react';
import {Projects, Item} from './projectStyle';
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1500, itemsToShow: 1 },
  { width: 1200, itemsToShow: 2 },
  { width: 2200, itemsToShow: 3 },
];

const Project = () => {
  return (
    <Projects>
      <h1>Projetos</h1>
      <Carousel breakPoints={breakPoints}>
      
        <Item number="1">
        <h2>Front-End</h2>
        <a href="">
          <img src="./images/portfolio.png" alt="" />
        </a>
          <h3>Portfólio</h3>
          <p>Projeto criado para aprender e praticar conhecimentos do React (components, hooks, dependencias) e mostrar um pouco sobre mim e minhas skills.</p>
        </Item>
        <Item number="2">
        <a href="">
          <img src="./images/portfolio.png" alt="" />
        </a>
          <h3>Frontend</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, dolorem temporibus esse aut dolore eos.</p>
        </Item>
      
      </Carousel>
    </Projects>
  );
};

export default Project;