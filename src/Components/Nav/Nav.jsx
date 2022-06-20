import React, { useState } from 'react';
import {Navigation} from './navStyle';

import { Link } from "react-scroll";

import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BsFileEarmarkCode } from 'react-icons/bs';
import { BsCodeSlash } from 'react-icons/bs';
import { MdOutlineContactPage } from 'react-icons/md';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
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
      <a
        onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome className="icon" />
      </a>
      </Link>

      <Link
       activeClass="active"
       className="about"
       to="About"
       spy={true}
       smooth={true}
       duration={600}
      >
      <a
        onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <CgProfile className="icon" />
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
        onClick={() => setActiveNav('#skill')} className={activeNav === '#skill' ? 'active' : ''}>
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
        onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}>
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
        onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <MdOutlineContactPage className="icon" />
      </a>
      </Link>
      
    </Navigation>
  );
}
 
export default Nav;