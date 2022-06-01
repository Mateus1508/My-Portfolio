import styled from "styled-components";

export const Languages = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "title "
  "content ";
  gap: 1rem;
  height: 100vh;
  margin: 1rem;
  border: 1rem;
  width: 50vw;
  float: left;
  @media (max-width: 1033px) {
        display: grid;
        height: 100%;
        width: 100vw;
        grid-template-columns: 100vw;
        grid-template-areas: "title"
                            "content";       
        gap: 1rem;
        margin: 0;
        border: 1rem;
        justify-items: center;
      }
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
   
    visibility: hidden;
    
}
  .rec.rec-arrow:hover {
    background-color: #fff;
    color: #000;
}

  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
}
  
`
export const Skills = styled.div`
    display: grid;
    grid-area: content;
    grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
    grid-template-areas: "1 1"
                         "2 2";
    grid-template-rows: 130px 1fr;
    border: 1rem;
    align-items: flex-start;
    background: rgba(255, 255, 255, 0.16);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    @media (max-width: 1033px) {
      width: 60%;
    }
    @media (max-width: 768px) {
     width: 100vw;
     grid-template-columns: repeat(auto-fit, 1fr);
     grid-template-areas: "1 1"
                         "2 2";
    grid-template-rows: 190px 1fr;
    }
    h2{
      grid-area: 1;
      text-align: center;
      align-self: center;
      margin: 1rem;
      color: #fff;
      background-color: transparent;
      height: 49%;
      border-bottom: 1px solid #fff;
      white-space: nowrap;
      @media (max-width: 1033px) {
          text-align: center;
          font-size: 25px;
          font-weight: bold;
      }
      @media (max-width: 769px) {
          text-align: center;
          font-size: 23px;
          font-weight: bold;
          white-space: normal;
      }
    }
    div{
      display: grid;
      grid-area: 2;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      margin: 20px;
      background: transparent;

/*       @media (max-width: 1033px) {
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-areas: "1 1 1"
                              "2 2 2";
        justify-items: center;        
      }       */

      @media (max-width: 700px) {
          grid-template-columns: 1fr 1fr;
          grid-template-areas: "1 1"
                              "2 2";
        justify-items: center;        
      }      
      }
    
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
          
          @media (max-width: 700px) {  
            height: 6rem;
            width: 5rem;
            padding: 1rem 0 1rem 0;
          }
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
              @media (max-width: 700px) {  
               font-size: 0.8rem;
              }
            }
            img{
              max-width: 3rem;
              margin: 1rem;
              align-self: center;
              justify-self: center;
              grid-area: img;
              background: transparent;
              @media (max-width: 700px) {    
                width: 2rem;
                margin: 1.5rem 0 1.5rem 0;
              }
              }
            small{
              align-self: center;
              justify-self: center;
              grid-area: small;
              text-align: center; 
              background: transparent;   
              @media (max-width: 700px) {  
                font-size: 0.7rem;
              }       
            }
        

      `