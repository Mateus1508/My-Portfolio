import styled from "styled-components";

export const Languages = styled.section`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 100vw;
  h1{
    grid-area: title;
    font-size: 64px;
    text-align: center;
    align-self: center;
    color: #000;
    height: 15vh;
    @media (max-width:1200px){
      height: 10vh;
      font-size: 48px;

    }
  }

section {
  display: flex;
  justify-content: center;
  @media (max-width:1200px){
    flex-direction: column;
    place-items: center;
  }
}
`
export const Skills = styled.div`
    display: grid;
    margin: 1rem;
    grid-template-columns: repeat(auto-fit, 1fr);
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-template-areas: "1 1 1"
                         "2 2 2";
    border: 1rem;
    align-items: flex-start;
    background: rgba(255, 255, 255, 0.16);
    box-shadow: 0 0 10px #90e0ef; 
    @media (max-width: 1200px) {
     width: 50vw;
    }
    @media (max-width: 750px) {
     width: 60vw;
    }
    @media (max-width: 600px) {
     width: 70vw;
    }
    @media (max-width: 540px) {
     width: 90vw;
    }
    h2{
      grid-area: 1;
      text-align: center;
      align-self: center;
      color: #000;
      background-color: transparent;
      margin: 1rem 0 1rem 0;
      @media (max-width: 1200px) {
          text-align: center;
          font-size: 25px;
          font-weight: bold;
      }
      @media (max-width: 1200px) {
          text-align: center;
          font-size: 23px;
          font-weight: bold;
      }
    }
    div{
      display: grid;
      grid-area: 2;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr 1fr 0.5fr;
      gap: 1rem;
      place-items: center;
      margin: 0.5rem;
      background: transparent;
      max-height: max-content;
      @media (max-width: 1200px) {
          grid-template-columns: repeat(1fr);
          grid-template-areas: "1 1 1"
                              "2 2 2";
        justify-items: center;     
      }      
      @media (max-width: 500px) {
          grid-template-columns: 1fr 1fr;
          grid-template-areas: "1 1"
                              "2 2";
        justify-items: center;     
        margin-bottom: 1rem;   
      }      
      }
    
          article{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-areas: "h4"
            "img"
            "small";
            padding: 1rem 2rem;
            margin: 0 .5rem 0 .5rem;
            margin-top: .1rem;
            height: 9rem;
            width: 7rem;
            box-shadow: 0 0 10px #90e0ef; 
            transition: 0.5s;
        }
          h4{
            font-family: 'Bebas Neue', cursive;
              letter-spacing: 0.09rem;
              font-weight: normal;
              grid-area: h4;
              align-self: center;
              justify-self: center;
              text-align: center;
              background: transparent;
            }
            img{
              max-width: 3rem;
              margin: 1rem;
              align-self: center;
              justify-self: center;
              grid-area: img;
              background: transparent;
              transition: 0.5s;
              &:hover{
                transform: scale(1.2) rotateZ(1turn);
              }
              }
            small{
              align-self: center;
              justify-self: center;
              grid-area: small;
              text-align: center; 
              background: transparent;        
            }
      `