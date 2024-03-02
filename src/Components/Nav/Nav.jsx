import React, { useState } from "react";
import {Navigation} from "./navStyle";

import { Link } from "react-scroll";

import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsFileEarmarkCode } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";


const Nav = () => {
	const [activeNav, setActiveNav] = useState("#");
	return (  
		<Navigation>

			<Link
				activeClass="active"
				className="home"
				to="Home"
				spy={true}
				smooth={true}
				duration={600}
			>
				<a href="#Home"
					onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
					<AiOutlineHome className="icon" />
				</a>
			</Link>

			<Link
				activeClass="active"
				className="aboutMe"
				to="AboutMe"
				spy={true}
				smooth={true}
				duration={600}
			>
				<a href="#AboutMe"
					onClick={() => setActiveNav("#aboutMe")} className={activeNav === "#aboutMe" ? "active" : ""}>
					<CgProfile className="icon" />
				</a>
			</Link>
      
			<Link
				activeClass="active"
				className="experiences"
				to="Experiences"
				spy={true}
				smooth={true}
				duration={600}
			>
				<a href="#Experiences"
					onClick={() => setActiveNav("#experiences")} className={activeNav === "#experiences" ? "active" : ""}>
					<GrUserExpert className="icon" />
				</a>
			</Link>

			<Link
				activeClass="active"
				className="skill"
				to="Skill"
				spy={true}
				smooth={true}
				duration={600}
			>
				<a href="#Skill" 
					onClick={() => setActiveNav("#skill")} className={activeNav === "#skill" ? "active" : ""}>
					<BsCodeSlash className="icon" />
				</a>
			</Link>

			<Link
				activeClass="active"
				className="project"
				to="Project"
				spy={true}
				smooth={true}
				duration={600}
			>
				<a href="#Project" 
					onClick={() => setActiveNav("#project")} className={activeNav === "#project" ? "active" : ""}>
					<BsFileEarmarkCode className="icon" />
        
				</a>
			</Link>

			<Link
				activeClass="active"
				className="contact"
				to="Contact"
				spy={true}
				smooth={true}
				duration={600}
			>
				<a href="#Contact" 
					onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}>
					<MdOutlineContactPage className="icon" />
				</a>
			</Link>
      
		</Navigation>
	);
};
 
export default Nav;