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
					<p>Sou um desenvolvedor frontend com ampla experiência em tecnologias como React, TypeScript, Node e C#, e uma afinidade especial por frameworks de estilo como Tailwind. Com mais de dois anos de atuação no desenvolvimento de sistemas, adquiri uma sólida experiência em trabalhar com bancos de dados SQL e NoSQL, comprovada por meus certificados e projetos.</p>
					<p>Meu compromisso é entregar soluções de alta qualidade de forma eficiente, sempre mantendo um padrão de excelência. Além disso, sou um colaborador ativo em equipes, sempre disposto a aprender e contribuir. Compartilhar conhecimentos e experiências com meus colegas é uma parte fundamental do meu trabalho.</p>
				</section>
			</div>
		</Container>
	);
};
 
export default AboutMe;
