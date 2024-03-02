import Repositories from "./Repositories";
import React from "react";
import { Projects } from "./projectStyle";
import ApiGithub from "/src/Services/ApiGithub";
import { useEffect, useState } from "react";
import { ButtonLarge } from "../Button/buttonStyle";
import { FilterBox } from "../FilterBox/FilterBox";

const Project = () => {
	const [repos, setRepos] = useState([]);
	const [filter, setFilter] = useState([]);

	useEffect(() => {
		ApiGithub.get("repos").then(({ data }) => {
			setRepos(data);
			setFilter(data);
		});
	}, []);

	const Todos = () => {
		setRepos(filter);
	};
	const filterFront = () => {
		const frontRepos = filter.filter((repos) => repos.name.includes("front"));
		setRepos(frontRepos);
	};

	const filterBack = () => {
		const backRepos = filter.filter((repos) => repos.name.includes("back"));
		setRepos(backRepos);
	};
	const filterCodeSandbox = () => {
		const codeSandbox = filter.filter((repos) => repos.name.includes("codesandbox"));
		setRepos(codeSandbox);
	};
	const filterMobile = () => {
		const mobile = filter.filter((repos) => repos.name.includes("mobile"));
		setRepos(mobile);
	};

	return (
		<Projects id="Project">
			<h1 data-aos="flip-left">Projetos</h1>

			<FilterBox data-aos="fade-left">
				<ButtonLarge onClick={filterFront}>Frontend</ButtonLarge>
				<ButtonLarge onClick={filterCodeSandbox}>CodeSandbox</ButtonLarge>
				<ButtonLarge onClick={filterBack}>Backend</ButtonLarge>
				<ButtonLarge onClick={filterMobile}>Mobile</ButtonLarge>
				<ButtonLarge onClick={Todos}>Todos</ButtonLarge>
			</FilterBox>

			<section data-aos="zoom-in">
				{repos?.map((repos) => (
					<Repositories
						key={repos.id}
						id={repos.id}
						name={repos.description}
						github={repos.html_url}
						language={repos.language}
					/>
				))}
			</section>
		</Projects>
	);
};

export default Project;
