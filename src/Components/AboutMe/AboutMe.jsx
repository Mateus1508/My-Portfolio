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
					<p>Sou um profissional apaixonado por desenvolvimento, especializado em JavaScript e ASP.NET C#. Com mais de dois anos de experiência, exerci liderança em projetos desafiadores, como sistemas de monitoramento e validação facial. Tenho a capacidade de resolver problemas complexos, otimizar processos e garantir a excelência em cada entrega. Estou sempre em busca das melhores práticas para melhorar a eficiência e a qualidade do desenvolvimento. </p>
				</section>
			</div>
		</Container>
	);
};
 
export default AboutMe;
