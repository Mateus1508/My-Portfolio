import styled from 'styled-components/macro';



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
  @media (max-width:920px){
    place-items: center;
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
    overflow: hidden;
    position: relative;
    &::after{
      animation: text-reveal 1.5s ease forwards;
      background-color: #fff;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      content: '';
      display: block;
      position: absolute;
    }
    @keyframes text-reveal {
      from { transform: translateX(-101%) }
      to { transform: translateX(101%) }
      
    }
    h1{
      text-align: center;
      color: #FFF;
      font-size: 4.5em;
      margin: 1rem;
      opacity: 0;
      animation: show 1ms 0.5s forwards; 
      flex-basis: 100%;
      @media (max-width:540px){
        font-size: 3em;
      }
    }
    h3{
      opacity: 0;
      color: #023e8a;
      text-align: center;
      font-size: 1.5em; 
      animation: show 1ms 0.5s forwards; 
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
    @media (max-width:920px){
      grid-column: 1/3;
      margin: 1rem 0 1rem 0;
      grid-row: 1;
      justify-self: center;
    }
    @media (width: 375px){
      height: 150px;
      width: 150px;
    }
    }
    a{
      animation: buttonComing 2s ease-out 1 normal; 
      background-color: #fff;
      box-shadow: 0 0 5px rgba(0,0,0,0.2);
      display: flex;
      border-radius: 5px;
      transition: 0.3s;
      align-self: start;
      &:hover{
        background-color: #48cae4;
        box-shadow: 0 0 15px #90e0ef;
      }
      .icon{
        height: 3rem;
        width: 4rem; 
        padding: 0.5rem;
        color: #023e8a;
        &:hover{
          color: #fff;
        }  
      }
    }
    .linkedin{
      grid-area: btn1;
      justify-self: end;
      @media (max-width:920px){
        justify-self: center;
      }
    }
    .github{
      grid-area: btn2;
      justify-self: start;
      @media (max-width:920px){
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

  @keyframes bgAnimation {
    0% { background-position: 0% 50%;
    }
    50% { background-position: 100% 50%;
    }
    100% { background-position: 0 50%;
    }
  }

  @keyframes show {
   to{
      opacity: 1;
    }
  }
  `