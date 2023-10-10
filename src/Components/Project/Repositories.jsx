import React from 'react';
import { Item } from './projectStyle';
import { ButtonSmall } from '../Button/buttonStyle';



const Repositories = ({ id, filter, name, demo, github, language }) => {

  return (
    <Item id={id} name={filter}>
      <div>
        {language != null ? <span>{language}</span> : null}
        <a href={github} target="_blank" rel="noopener noreferrer">
          <ButtonSmall>Código</ButtonSmall>
        </a>
        {demo != "" ? <a href={demo} target="_blank" rel="noopener noreferrer">
          <ButtonSmall>Demo</ButtonSmall>
        </a> : <small>Demo indisponível </small>}
      </div>
      <h2>{name}</h2>
    </Item>
  );
};

export default Repositories;