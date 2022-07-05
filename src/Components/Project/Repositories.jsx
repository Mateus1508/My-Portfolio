import React from 'react';
import {Item} from './projectStyle';



const Repositories = ({id, filter, name, demo, github, language }) => {
  return (
        <Item id={id} name={filter}>
        <h2>{name}</h2>
        <span>{language}</span>
          <a href={github} rel="noopener noreferrer" _blank>
            <button>Código</button>
          </a>
          <a href={demo} rel="noopener noreferrer" _blank>
            <button>Demo</button>
          </a>
        </Item>
  );
};

export default Repositories;