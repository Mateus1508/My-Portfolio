import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html{
  scroll-behavior: smooth;
}
  *{
    overflow-y: initial;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  *, input, button {
    font-family: 'Roboto', sans-serif;
  }
  :target{
    scroll-margin-top: 1rem;
    
  }

  
  


`