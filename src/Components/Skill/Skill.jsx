import React from 'react';

import { Languages, Skills } from './skillStyle'; 
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1500, itemsToShow: 1 },
  { width: 1200, itemsToShow: 2 },
  { width: 2200, itemsToShow: 3 },
];

const Skill = () => {
  return (  
    <Languages id="Skill">
      <h1>Habilidades</h1>
      <Carousel 
      breakPoints={breakPoints}
      easing="cubic-bezier(1,.15,.55,1.54)"
      tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
      transitionMs={700}
    >
      <Skills className="frontend" number="1">
        <h2>Desenvolvimento Frontend</h2>
        <div>
          <article>
            <h4>HTML5</h4>
            <small>Avançado</small>
            <img src="./images/html-5.png" alt="HTML5" />
          </article>
          <article>
            <h4>CSS3</h4>
            <small>Avançado</small>
            <img src="./images/css-3.png" alt="CSS3" />
          </article>
          <article>
            <h4>Javascript</h4>
            <small>Intermediário</small>
            <img src="./images/js.png" alt="Javascript" />
          </article>
          <article>
            <h4>React</h4>
            <small>Básico</small>
            <img src="./images/physics.png" alt="ReactJS" />
          </article>
          <article>
            <h4>Bootstrap</h4>
            <small> Intermediário</small>
            <img src="./images/bootstrap.png" alt="Bootstrap" />
          </article>
          <article>
            <h4>Styled Components</h4>
            <small> Básico</small>
            <img src="./images/styled-components.png" alt="Styled Components"/>
          </article>
            <article>
              <h4>Sass</h4>
              <small>Básico</small>
              <img src="./images/sass.png" alt="Sass" /> 
            </article>
          </div>
        </Skills>
        <Skills className="backend" number="2">
          <h2>Desenvolvimento Backend</h2>
          <div>
            <article>
              <h4>MySQL</h4>
              <small>Intermediário</small>       
              <img src="./images/mysql.png" alt="MySQL" />
            </article>
            <article>
              <h4>PHP</h4>
              <small>Básico</small>
              <img src="./images/php.png" alt="PHP" />
            </article>
            <article>
              <h4>Node</h4>
              <small>Básico</small>
              <img src="./images/node-js.png" alt="NodeJS" />
            </article>
          </div>
        </Skills>    
          <Skills className="Outros" number="3">
            <h2>Outros</h2>
            <div>
            <article>
              <h4>Azure DevOps</h4>
              <small>Básico</small>
              <img src="./images/azure.png" alt="Azure DevOps" />
            </article>
            <article>
              <h4>Git</h4>
              <small>Intermediário</small>        
              <img src="./images/git.png" alt="Git" />
            </article>
            <article>
              <h4>Github</h4>
              <small>Intermediário</small>
              <img src="./images/github.png" alt="Github" />
            </article>
            <article>
              <h4>Photoshop</h4>
              <small>Intermediário</small>
              <img src="./images/Photoshop.png" alt="Photoshop" />
            </article>
            </div>
          </Skills>
          </Carousel>
    </Languages>
  );
}
export default Skill;





