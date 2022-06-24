import styled from 'styled-components';



export const HomePage = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: repeat(auto-fit);
  grid-template-areas: ". . . ."
                       "name name . ."
                       "btn1 btn2 . .";
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  animation: bgColor 15s linear infinite alternate;
  @media (max-width:450px){
    grid-template-rows: repeat(auto-fit);
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
  "img img"
  "name name"
  "btn1 btn2";
  }
  div{
    flex-direction: column;
    grid-area: name;
    overflow-y: hidden;
    h1{
      text-align: center;
      color: #FFF;
      font-size: 4.5em;
      margin: 10px;
      animation: show 1.5s ease-in 1 normal; 
      flex-basis: 100%;
    }
    h3{
      text-align: center;
      font-size: 1.3em; 
      animation: show 1s ease-in 1 normal; 
    }
  }
   .perfil{
    grid-column: 3/5;
    grid-row: 2;
    justify-content: center;
    width: 250px;
    height: 250px;
    border: 1px ;
    border-radius: 50%;
    animation: coming 1.5s ease-out 1 normal; 
    @media (max-width:450px){
      grid-column: 1/3;
      grid-row: 1;
      justify-self: center;
      
    }
    }
    a{
      animation: buttonComing 2s ease-out 1 normal; 
      background-color: #fff;
      width: 10rem;
      display: flex;
      justify-content: center;
      border-radius: 5px;
      &:hover{
        transition: 0.1s;
        background-color: #ddd;
      }
      img{
        height: 3rem;
        width: 3rem; 
        }
    }
    .linkedin{
      grid-area: btn1;
      justify-self: end;
      @media (max-width:450px){
        justify-self: center;
      }
    }
    .github{
      grid-area: btn2;
      justify-self: start;
      @media (max-width:450px){
        justify-self: center;
      }
      }
        
  
    
    @keyframes coming {
      0%{
        transform: translateY(-90rem) rotateZ(1turn);
      }
      50%{
        transform: translateY(10px);
      }
      60%{
        transform: translateY(15px);
      }
      80%{
        transform: translateY(-15px);
      }
    100%{
      transform: translateY(0rem);
    }
  }
    @keyframes buttonComing {
      0%{
        transform: translateX(-90rem);
      }
      50%{
        transform: translateX(10px);
      }
      60%{
        transform: translateX(15px);
      }
      80%{
        transform: translateX(-15px);
      }
    100%{
      transform: translateX(0rem);
    }
  }
  
  @keyframes bgColor {
    0% { background-color: #caf0f8;
    }
    30% { background-color: #90e0ef;
    }
    60% { background-color: #8ecae6;
    }
    80% { background-color: #219ebc;
    }
    100% { background-color: #0096c7;
    }
  }
  
  @keyframes show {
    0%{
      opacity: 0;
      transform: scale(0.5);
    }
    50%{
      opacity: 1s;
      transform: scale(1.1);
      
    }
    100%{
      opacity: 1;
      transform: scale(1);
      
    }
  }
  `