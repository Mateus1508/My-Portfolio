import React, { useState } from 'react';
import {Navigation} from './navStyle';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (  
    <Navigation>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><img src="./images/home.png" alt="Home" /></a>
      <a href="#About" onclick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><img src="./images/about.png" alt="About" /></a>
      <a href="#Skill" onclick={() => setActiveNav('#skill')} className={activeNav === '#skill' ? 'active' : ''}><img src="./images/skill.png" alt="Skill" /></a>
      <a href="#Projects" onclick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><img src="./images/projects.png" alt="Projects" /></a>
      <a href="#Contact" onclick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><img src="./images/contact.png" alt="Contact" /></a>
    </Navigation>
  );
}
 
export default Nav;