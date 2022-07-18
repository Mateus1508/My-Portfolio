import React from 'react';
import {Description} from './aboutStyle';
import {IoIosMusicalNote} from 'react-icons/io'
import {FaBasketballBall} from 'react-icons/fa'
import {BiFootball} from 'react-icons/bi'

const About = () => {
  return (
    <Description id="About">

        <h1 data-aos="fade-up">Sobre Mim</h1>
        <p data-aos="zoom-in-left">Comecei minha trajetória de TI no curso de Redes de computadores, 
          mas ao aprender sobre lógica de programação e sobre como era divertido
           resolver problemas e criar soluções utilizando códigos resolvi mudar meu
            curso para Análise e desenvolvimento de sistemas. Na medida em que fui
             aprendendo sobre linguagens de programação, sobre o que consigo criar com elas,
              vi que é realmente o que quero para minha vida.</p>
        <section >
          <h3 data-aos="zoom-out">Hobbies</h3>
          <div data-aos="zoom-out">
            <BiFootball className="icon"/>
            <FaBasketballBall className="icon"/>
            <IoIosMusicalNote className="icon"/>
          </div>
        </section>

    </Description>
  );
};

export default About;


