import styled from "styled-components";

export const Languages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "title title title"
                       "content content content";
  gap: 1rem;
  height: 100vh;
  margin: 10px;
  border: 10px;
  min-width: 1000px;
  h1{
    grid-area: title;
    text-align: center;
    align-self: center;
  }
  div{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10vw, 1fr));
    grid-template-areas: "1 1"
    "2 2";
    grid-template-rows: 130px 1fr;
    background-color: #1E90FF;
    border: 10px;
    border-radius: 10px;
    align-items: flex-start; 
    h2{
      grid-area: 1;
      text-align: center;
      align-self: center;
      margin: 10px;
      color: #fff;
      background-color: transparent;
      height: 50%;
      border-bottom: 1px solid #fff;
      white-space: nowrap;
    }
    div{
      display: grid;
      grid-area: 2;
      grid-template-columns: repeat(auto-fit, minmax( 100px, 1fr));
      gap: 1rem;
      margin: 10px;
          article{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-areas: "h4"
                                 "img"
                                 "small";
            padding: 10px 20px;
            border-radius: 5px;
            margin-top: 10px;
                }
            h4{
              font-family: 'Bebas Neue', cursive;
              letter-spacing: 0.1rem;
              font-weight: normal;
              grid-area: h4;
              align-self: center;
              justify-self: center;
              text-align: center;
              white-space: nowrap;
            }
            img{
              max-width: 50px;
              margin: 10px;
              align-self: center;
              justify-self: center;
              grid-area: img;
              }
            small{
              align-self: center;
              justify-self: center;
              grid-area: small;
              text-align: center;           
            }
        }
      }
      @media (max-width: 1033px) {
        display: grid;
        grid-template-columns: 100vw;
        grid-template-areas: "title"
                            "content";
        gap: 1rem;
        margin: 0;
        border: 10px;
        height: 200vh;
        justify-items: center;
        h2{
          width: 90%;
        }
    
        div{
          width: 90%;
          align-items: center;
          overflow-x: auto !important;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas: "1 1"
                              "2 2";
          grid-template-rows: 1fr;
          background-color: #1E90FF;
          border: 10px;
          border-radius: 10px;
          justify-items: center;
          
      }
    }
`