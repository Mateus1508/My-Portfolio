import React from 'react';
import { Description } from './aboutStyle';
import { IoIosMusicalNote } from 'react-icons/io'
import { FaBasketballBall } from 'react-icons/fa'
import { BiFootball } from 'react-icons/bi'

const About = () => {
  return (
    <Description id="About">

      <h1 data-aos="fade-up">Sobre Mim</h1>

      <div data-aos="zoom-in-left">
        <p>Sou um Desenvolvedor Fullstack com experiência significativa em tecnologias como React, Typescript, Node e C#, e tenho uma afinidade especial com frameworks de estilo, como o Tailwind. Com mais de 2 anos de atuação no desenvolvimento de software, tenho adquirido experiência sólida em trabalhar com bancos de dados tanto SQL quanto NoSQL, e minhas habilidades são respaldadas por certificações relevantes.</p>
        <p>Meu compromisso é entregar soluções de alta qualidade de forma eficiente, sempre mantendo um padrão de excelência. Além disso, sou um colaborador ativo em equipes, sempre disposto a aprender e contribuir. Compartilhar conhecimentos e experiências com meus colegas é uma parte fundamental do meu trabalho.</p>
        <p>Fora do mundo da programação, sou um apaixonado por basquete, mantendo-me ativo tanto mental quanto fisicamente. Além disso, sou um entusiasta de videogames, buscando constantemente desafios em novos mundos virtuais para expandir minhas habilidades.</p>
      </div>

    </Description>
  );
};

export default About;


