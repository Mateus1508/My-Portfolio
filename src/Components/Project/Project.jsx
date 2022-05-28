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
    <Projects id="Projects">
      <h1>Projetos</h1>
      <Carousel breakPoints={breakPoints}>
      
        <Item number="1">
        <a href="">
          <img src="./images/portfolio.png" alt="" />
          <h3>Frontend</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, minus.</p>
        </a>
        </Item>
        <Item number="2">
        <a href="">
          <img src="./images/portfolio.png" alt="" />
          <h3>Frontend</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, dolorem temporibus esse aut dolore eos.</p>
        </a>
        </Item>
      
      </Carousel>
    </Projects>
  );
};

export default Project;