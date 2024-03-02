import React from "react";
import { Container } from "./aboutMeStyle";

const AboutMe = () => {
	return (
		<Container id="AboutMe">
			<h1>Perfil</h1>
			<div data-aos="fade-left">
				<img src="https://github.com/Mateus1508.png" alt="Mateus, Foto de perfil" />  
				<section>
					<h2>Quem sou</h2>
					<p>Sou um Desenvolvedor Fullstack com experiência significativa em tecnologias como React, Typescript, Node e C#, e tenho uma afinidade especial com frameworks de estilo, como o Tailwind. Com mais de 2 anos de atuação no desenvolvimento de software, tenho adquirido experiência sólida em trabalhar com bancos de dados tanto SQL quanto NoSQL, e minhas habilidades são comprovadas por meus certificados e projetos.</p>
					<p>Meu compromisso é entregar soluções de alta qualidade de forma eficiente, sempre mantendo um padrão de excelência. Além disso, sou um colaborador ativo em equipes, sempre disposto a aprender e contribuir. Compartilhar conhecimentos e experiências com meus colegas é uma parte fundamental do meu trabalho.</p>
				</section>
			</div>
		</Container>
	);
};
 
export default AboutMe;