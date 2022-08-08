import { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyles = createGlobalStyle`
  html{
  scroll-behavior: smooth;
  background: linear-gradient(90deg, #90e0ef, #e56b6f, #4361ee, #bc3908) no-repeat;
  animation: bgAnimation 30s linear infinite;
  background-size: 600% 300%;
  scrollbar-width: thin;     
  scrollbar-color: #023e8a;

}
::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);        
}
::-webkit-scrollbar-thumb{
  background-color: #90e0ef;
  border-radius: 20px;
}
::-webkit-scrollbar{
  width: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  }

  *{
    overflow-y: initial;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  h1{
    padding: 0 5px;
  }
  h1,h2,h3,h4,small{
    text-shadow: 5px 2px 5px rgba(0, 0, 0, 0.2); 
    text-rendering: optimizeLegibility !important;
  }
  *, input, button {
    font-family: 'Roboto', sans-serif;
  }
  :target{
    scroll-margin-top: 1rem;
    
  }
  @keyframes bgAnimation {
    0% { background-position: 0% 50%;
    }
    50% { background-position: 100% 50%;
    }
    100% { background-position: 0 50%;
    }
  }

  
  


`