import styled from "styled-components";

export const Languages = styled.div`
  display: grid;
  grid-template-columns: "1fr 1fr 1fr";
  grid-template-areas: "title title title"
                       "content content content";
  gap: 1rem;
  height: 100vh;
  margin: 10px;
  border: 10px;
    h2{
      margin: 10px;
      color: #fff;
      background-color: transparent;
      }
    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #1E90FF;
      border: 10px;
      border-radius: 10px;
        div{
          display: grid;
          grid-template-areas: "1 1"
                               "2 2";
          grid-template-columns: "1fr 1fr";
          gap: 1rem;
          article{
            display: grid;
            grid-template-columns: "1fr 1fr";
            grid-template-areas: "h4 h4"
                                 "img small";
            padding: 20px;
            border-radius: 5px;
                }
            h4{
              grid-column: 1/3;
              grid-row: 1;
              align-self: center;
              justify-self: center;
            }
            img{
              width: 50px;
              margin: 10px;
              grid-column: 1;
              grid-row: 2;
              }
            small{
              align-self: center;
              justify-self: center;
              grid-column: 2;
              grid-row: 1/3;
            }
        }
      }
      @media (max-width: 820px) {
        display: grid;
        grid-template-columns: "1fr";
        grid-template-areas: "title"
                       "content";
        gap: 0.5rem;  
        div{
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #1E90FF;
          border: 10px;
          border-radius: 10px;
          div{
            display: grid;
            grid-template-areas: "1 1"
                                "2 2";
            grid-template-columns: "1fr 1fr";
            gap: 1rem;
            }
        }             
      }
`