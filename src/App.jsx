import React from 'react'; 

import { GlobalStyles } from './GlobalStyles';
import {ThemeProvider} from 'styled-components'
import light from './Themes/light';
import dark from './Themes/dark';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skill from './Components/Skill/Skill';
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';
import Nav from './Components/Nav/Nav';


function App() { 
  return (
    <ThemeProvider theme={light}>  
      <GlobalStyles/>
        <Nav/>
        <Home/>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
    </ThemeProvider>
  )
}


export default App 
