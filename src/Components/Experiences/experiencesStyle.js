import styled from "styled-components/";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: max-content;
  padding-bottom: 20px;
  section {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    height: max-content;
    align-items: center;
    justify-content: center;
}

`;

export const Card = styled.article`
  display: grid;
  width: 50%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 40px 30px 2fr;
  color: #eeeeee;
  min-height: 200px;
  max-height: max-content;
  background: rgb(2, 62, 138, 0.5);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 15px #90e0ef;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  @media (max-width:1227px){
    width: 90%;
    grid-template-columns: 1fr;
    grid-template-rows: 40px 30px 30px 2fr;
    }
  h2 {
      grid-column: 1;
      align-self: flex-start;
      @media (max-width:1227px){  
        grid-column: 1;
        grid-row: 1;
      }
  }
  h3 {
    grid-column: 1;
    align-self: center;
    font-size: 18px;
    color: #90e0ef;
    @media (max-width:1227px){  
        align-self: center;
        grid-column: 1;
        grid-row: 2;
      }
  }
  span {
    grid-column: 2;
    grid-row: 1;
    align-self: flex-start;
    text-align: right;
    color: #aaa;
    @media (max-width:1227px){
      align-self: flex-start;
      text-align: left;
      grid-column: 1;
      grid-row: 3;
    }
  }
  p {
    grid-row: 3;
    grid-column: 1/3;
    align-self: flex-end;
    flex-wrap: wrap;
    text-align: justify;
    @media (max-width:1227px){  
        grid-column: 1;
        grid-row: 4;
      }
  }
`;
