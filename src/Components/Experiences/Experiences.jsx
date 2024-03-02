import React from "react";
import { Card, Container } from "./experiencesStyle";
import array from "./arrayOfExperiences.json";
import { ButtonLarge } from "../Button/buttonStyle";
import { FilterBox } from "../FilterBox/FilterBox";

const Experiences = () => {
	const [index, setIndex] = React.useState(0);

	const selectedExperience = array.filter((_, i) => i === index)[0] || {};

	return (
		<Container id="Experiences" data-aos="zoom-in">
			<h1>Experiências</h1>
			<section>
				<FilterBox data-aos="fade-left">
					{
						array.map((experience, index) => (
							<ButtonLarge key={index} onClick={() => setIndex(index)}>{experience.position}</ButtonLarge>
						))
					}
				</FilterBox>
				<Card key={index}>
					<h2>{selectedExperience.position}</h2>
					<h3>{selectedExperience.company}</h3>
					<span>{selectedExperience.time}</span>
					<p>{selectedExperience.description}</p>
				</Card>
			</section>
		</Container>
	);
};

export default Experiences;
