import React from 'react';
import {Item} from './projectStyle';
import {ButtonMedium} from '../Button/buttonStyle';



const Repositories = ({id, filter, name, demo, github, language }) => {
  return (
        <Item id={id} name={filter}>
        <h2>{name}</h2>
        <span><h4>Tecnologia mais usada</h4><br />{language}</span>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <ButtonMedium>Código</ButtonMedium>
          </a>
          {demo != "https://nenhum.com.br" ? <a href={demo} target="_blank" rel="noopener noreferrer">
            <ButtonMedium >Demo</ButtonMedium>
          </a> : <small>Demo indisponível </small>} 
          
        </Item>
  );
};

export default Repositories;