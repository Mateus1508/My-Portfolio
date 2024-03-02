import React from "react";
import { Item } from "./projectStyle";
import { ButtonSmall } from "../Button/buttonStyle";



// eslint-disable-next-line react/prop-types
const Repositories = ({ id, name, github, language }) => {

	return (
		<Item id={id}>
			<div>
				{language != null ? <span>{language}</span> : null}
				<a href={github} target="_blank" rel="noopener noreferrer">
					<ButtonSmall>Código</ButtonSmall>
				</a>
			</div>
			<h2>{name}</h2>
		</Item>
	);
};

export default Repositories;