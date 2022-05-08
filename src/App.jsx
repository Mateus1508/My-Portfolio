import React from 'react'; 

import { GlobalStyles } from './GlobalStyles';
import {ThemeProvider} from 'styled-components'
import light from './Themes/light';
import dark from './Themes/dark';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Profile from './Components/Profile/Profile';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';


function App() { 
  return (
    <ThemeProvider theme={light}>
     <GlobalStyles/>

     <Home/>
     <About/>
     <Profile/>
     <Projects/>
     <Contact/>
    </ThemeProvider>
  )
}


export default App 
