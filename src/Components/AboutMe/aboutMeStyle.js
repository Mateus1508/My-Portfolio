import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: max-content;
  padding-bottom: 20px;
  div{
    display: flex;
    gap: 15px;
    animation: coming 1.5s ease-out 1 normal; 
    max-width: 66%;
    max-height: max-content;
    background: rgb(2, 62, 138, 0.5);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 15px #90e0ef;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    @media (max-width:920px){
      flex-direction: column;
      max-width: 90%;
    }
  img {
    justify-content: center;
    width: 30%;
    height: 100%;
    border: 1px ;
    border-radius: 10px;
    @media (max-width:920px){
      width: 100%;
    }
    
  }
  section {
    display: flex;
    flex-direction: column;
    padding-inline: 20px;
    width: 70%;
    gap: 10px;
    h2 {
      font-size: 36px;;
      color: #cccccc;
    }
    p {
      text-align: justify;
      color: #cccccc;
    }
    @media (max-width:920px){
      width: 100%;
      padding-inline: 0;
    }
  }
}

  @keyframes coming {
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
`;