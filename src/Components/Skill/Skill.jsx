import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";
import { DiScrum } from "react-icons/di";
import {
	FaReact,
	FaBootstrap,
	FaNodeJs,
	FaGitAlt,
	FaGithub,
	FaFigma
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import {
	SiCsharp,
	SiAzuredevops,
	SiTypescript,
	SiTailwindcss,
	SiMicrosoftsqlserver,
	SiSqlite,
	SiMongodb,
	SiMui,
	SiCanva,
	SiFlutter
} from "react-icons/si";



import { Languages, Skills } from "./skillStyle";

const Skill = () => {
	return (
		<Languages id="Skill">
			<h1>Habilidades</h1>
			<section>
				{/* Frontend */}
				<Skills className="frontend" data-aos="fade-right">
					<h2>Frontend</h2>
					<div>
						<article>
							<h4>HTML5</h4>
							<AiFillHtml5 className="icon" style={{ color: "#E44D26" }} />
						</article>
						<article>
							<h4>CSS3</h4>
							<IoLogoCss3 className="icon" style={{ color: "#1572B6" }} />
						</article>
						<article>
							<h4>Javascript</h4>
							<IoLogoJavascript className="icon" style={{ color: "#F7DF1E" }} />
						</article>
						<article>
							<h4>Typescript</h4>
							<SiTypescript className="icon" style={{ color: "#007ACC" }} />
						</article>
						<article>
							<h4>React</h4>
							<FaReact className="icon" style={{ color: "#61DAFB" }} />
						</article>
						<article>
							<h4>Bootstrap</h4>
							<FaBootstrap className="icon" style={{ color: "#7952B3" }} />
						</article>
						<article>
							<h4>Tailwind</h4>
							<SiTailwindcss className="icon" style={{ color: "#38B2AC" }} />
						</article>
						<article>
							<h4>Mateial UI</h4>
							<SiMui className="icon" style={{ color: "#0081CB" }} />
						</article>
						<article>
							<h4>Flutter</h4>
							<SiFlutter className="icon" style={{ color: "#02569B" }} />
						</article>
					</div>
				</Skills>

				{/* Backend */}
				<Skills className="backend" data-aos="fade-down">
					<h2>Backend</h2>
					<div>
						<article>
							<h4>MySQL</h4>
							<GrMysql className="icon" style={{ color: "#4479A1" }} />
						</article>
						<article>
							<h4>SQL Server</h4>
							<SiMicrosoftsqlserver className="icon" style={{ color: "#CC2927" }} />
						</article>
						<article>
							<h4>C#</h4>
							<SiCsharp className="icon" style={{ color: "#239120" }} />
						</article>
						<article>
							<h4>Node</h4>
							<FaNodeJs className="icon" style={{ color: "#8CC84B" }} />
						</article>
						<article>
							<h4>SQlite</h4>
							<SiSqlite className="icon" style={{ color: "#003B57" }} />
						</article>
						<article>
							<h4>MongoDB</h4>
							<SiMongodb className="icon" style={{ color: "#47A248" }} />
						</article>
						<article>
							<h4>Postgres</h4>
							<BiLogoPostgresql className="icon" style={{ color: "#336791" }} />
						</article>
					</div>
				</Skills>

				{/* Outros */}
				<Skills className="Outros" data-aos="fade-left">
					<h2>Outros</h2>
					<div>
						<article>
							<h4>Azure DevOps</h4>
							<SiAzuredevops className="icon" style={{ color: "#0078D7" }} />
						</article>
						<article>
							<h4>Git</h4>
							<FaGitAlt className="icon" style={{ color: "#F05032" }} />
						</article>
						<article>
							<h4>Github</h4>
							<FaGithub className="icon" style={{ color: "#181717" }} />
						</article>
						<article>
							<h4>Canva</h4>
							<SiCanva className="icon" style={{ color: "#00C4CC" }} />
						</article>
						<article>
							<h4>Figma</h4>
							<FaFigma className="icon" style={{ color: "#F24E1E" }} />
						</article>
						<article>
							<h4>SCRUM</h4>
							<DiScrum className="icon" style={{ color: "#61DAFB" }} />
						</article>
					</div>
				</Skills>
			</section>
		</Languages>

	);
};
export default Skill;





