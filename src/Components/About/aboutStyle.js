import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: "1fr 1fr";
  grid-template-rows: "1fr"
                      "1fr";
  grid-template-areas: "content content"
                       "  p       p  ";
  height: 100vh;
  align-items: center;
  justify-content: space-around;
  h2{
    grid-area: content;
  }
  
  p{
  grid-area: p;
  margin: 25px 10px;
  background-color: #999;
  justify-content: center;
 }
   



`
