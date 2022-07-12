import React from 'react';
import {Item} from './projectStyle';
import {ButtonMedium} from '../Buttons/buttonStyle';



const Repositories = ({id, filter, name, demo, github, language }) => {
  return (
        <Item id={id} name={filter}>
        <h2>{name}</h2>
        <span>{language}</span>
          <a href={github} rel="noopener noreferrer" _blank="true">
            <ButtonMedium>Código</ButtonMedium>
          </a>
          <a href={demo} rel="noopener noreferrer" _blank="true">
            <ButtonMedium>Demo</ButtonMedium>
          </a>
        </Item>
  );
};

export default Repositories;