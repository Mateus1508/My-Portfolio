import React, { useState } from 'react';
import {Navigation} from './navStyle';

import { Link } from "react-scroll";

import { RiHome2Line } from 'react-icons/ri';
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
        <RiHome2Line className="icon" />
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
       className="projects"
       to="Projects"
       spy={true}
       smooth={true}
       duration={600}
      >
      <a href="#Projects" 
        onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>
        <MdOutlineContactPage className="icon" />
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
        <BsFileEarmarkCode className="icon" />
      </a>
      </Link>
      
    </Navigation>
  );
}
 
export default Nav;