import styled from "styled-components";

export const HomePage = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
div{
  display: flex;
    flex-direction: column;
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
    font-size: 5em;
    margin: 1rem;
    opacity: 0;
    animation: show 1ms 0.5s forwards; 
    flex-basis: 100%;
    @media (max-width:630px){
      font-size: 3em;
    }
    @media (max-width:425px){
      font-size: 2em;
    }
  }
  h3{
    opacity: 0;
    color: #023e8a;
    text-align: center;
    font-size: 2em; 
    animation: show 1ms 0.5s forwards; 
    @media (max-width: 425px){
      font-size: 1.5em;
    }
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
  `;

export const Links = styled.section`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  gap: 12px;
  a{
    animation: buttonComing 2s ease-out 1 normal; 
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    width: max-content;
    border-radius: 5px;
    transition: 0.3s;
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
`; 