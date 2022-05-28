import styled from "styled-components";

export const Languages = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "title "
                       "content ";
  gap: 1rem;
  height: 100vh;
  margin: 10px;
  border: 10px;
  width: 50vw;
  float: left;
  h1{
    grid-area: title;
    text-align: center;
    align-self: center;
    color: #fff;
  }
  .rec.rec-arrow:disabled {
    visibility: hidden;
}
  .rec.rec-arrow {
    background-color: #fff;
}
  .rec.rec-arrow:hover {
    background-color: #fff;
    color: #000;
}

  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
}
  
@media (max-width: 1033px) {
      display: grid;
      grid-template-columns: 100vw;
      grid-template-areas: "title"
                          "content";       
      gap: 1rem;
      margin: 0;
      border: 10px;
      justify-items: center;
    }
`
export const Skills = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
    grid-template-areas: "1 1"
    "2 2";
    grid-template-rows: 130px 1fr;
    border: 10px;
    align-items: flex-start;
    background: rgba(255, 255, 255, 0.16);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    h2{
      grid-area: 1;
      text-align: center;
      align-self: center;
      margin: 10px;
      color: #fff;
      background-color: transparent;
      height: 49%;
      border-bottom: 1px solid #fff;
      white-space: nowrap;
    }
    div{
      display: grid;
      grid-area: 2;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      margin: 20px;
      background: transparent;
          article{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-areas: "h4"
                                 "img"
                                 "small";
            padding: 1rem 2rem;
            border-radius: 10px;
            margin-top: .1rem;
            height: 9rem;
            width: 7rem;
            background: #fFF;
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
              }
            small{
              align-self: center;
              justify-self: center;
              grid-area: small;
              text-align: center; 
              background: transparent;          
            }
        }

      @media (max-width: 1033px) {
        h2{
          text-align: center;
          font-size: 22px;
        }
        div{
          
          align-items: center;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas: "1 1"
                              "2 2";
          grid-template-rows: 1fr;
          background-color: #1E90FF;
        
          border-radius: 10px;
          justify-items: center;
          
          
      }
    }
      `