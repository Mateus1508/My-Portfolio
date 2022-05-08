import React from 'react';

import { Languages } from './profileStyle'; 

const Profile = () => {
  return (  
    <Languages>
      <div className="frontend">
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
          </div>
        </div>
        <div className="backend">
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
            <article>
              <h4>Angular</h4>
              <small>Loading...</small>
              <img src="./images/angular.png" alt="Angular" /> 
            </article>
          </div>
        </div>    
          <div className="Outros">
            <h2>Outros</h2>
            <div>
            <article>
              <h4>Flutter</h4>
              <small>Loading...</small>
              <img src="./images/flutter.png" alt="Flutter" /> 
            </article>
            <article>
              <h4>Azure DevOps</h4>
              <small>Básico</small>
              <img src="./images/azure.png" alt="Azure DevOps" />
            </article>
            <article>
              <h4>React Native</h4>
              <small>Loading...</small>
              <img src="./images/physics.png" alt="React Native" /> 
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
            </div>
          </div>
    </Languages>
  );
}
 
export default Profile;


