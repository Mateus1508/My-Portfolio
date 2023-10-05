import styled from 'styled-components/macro';

export const Description = styled.div`
  height: max-content;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1{
    margin: 50px 0;
    text-align: center;
    font-size: 4rem;
    color: #fff;
    @media (max-width: 600px) {
      font-size: 3em;
    }
  } 

  div {
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.2);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 15px #90e0ef;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    width: 70%;
    @media (max-width: 600px) {
      width: 95%;   
      padding: 5px;
    }
  }

  p{
    margin: 10px 0;
    color: #fff;
    font-size: 16px;
    justify-self: center;
    align-self: center;
    text-align: justify;
    letter-spacing: 1px;
    @media (max-width: 600px) {
      border-right: none;
      margin: 1rem 3rem;
      padding: 0;     
    }
  }
`
