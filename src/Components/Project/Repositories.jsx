import React from 'react';
import {Item} from './projectStyle';
import {Button} from '../Buttons/buttonStyle';



const Repositories = ({id, filter, name, demo, github, language }) => {
  return (
        <Item id={id} name={filter}>
        <h2>{name}</h2>
        <span>{language}</span>
          <a href={github} rel="noopener noreferrer" _blank>
            <Button>Código</Button>
          </a>
          <a href={demo} rel="noopener noreferrer" _blank>
            <Button>Demo</Button>
          </a>
        </Item>
  );
};

export default Repositories;