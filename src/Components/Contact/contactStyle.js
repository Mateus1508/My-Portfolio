import styled from "styled-components";

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: "1fr 1fr 1fr";
  grid-template-rows: "1fr 1fr";
  grid-template-areas: "... content ..."
                       "footer footer footer";
  height: 100vh;
  justify-items: center;
  width: 100vw;
  form{
    grid-area: content;
    background-color: #1E90FF;
    width: 70vw;
    align-items: center;
    display: grid;
    justify-items: center;
    border-radius: 1rem;
    padding: 20px;
    height: 70vh;
    margin: 2vh 0 3vh 0;
    color: #fff;
    h2 {
      background-color: transparent; 
    }
    fieldset{
        border: 1px solid #fff;
        border-radius: 1rem;
        padding: 0 1rem 1rem 1rem;
        background-color: transparent;
        width: 100%;
        height: 100%;
      legend{
          background-color: #1E90FF;
          color: #fff;
          margin-bottom: 1.5rem;
          font-size: 25px;
          border-radius: 0.3rem;
          padding: 2px;
      } 
      }
        }
        textarea {
          font-size: 20px;
          outline: none;
          background-color: transparent;
          color: #fff;
          width: 100%;

        }  
            input{
              margin-bottom: 1px;
              background-color: transparent;
              color: #fff;
              border-bottom: 1px solid #fff;
              align-items: center;
              text-align: center;
              font-size: 20px;
              height: 1.5rem;
              outline: none;
              width: 100%;
            }
            button{
              font-size: 20px;
              background-color: aliceblue;
              width: 100px;
              height: 5vh;
              border-radius: 5px;
              margin: 10px 10px 10px 0;
            cursor: pointer;
            color: #1E90FF;
            &:hover{
              background-color: #1A09FF;
              transition: 1s linear;
              color: aliceblue;
            }
            
          }
`

export const Footer = styled.footer`
         
            grid-area: footer;
            width: 100%;
            height: 25vh;
            background-color: #1A09FF;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            div{
              align-items: flex;
              justify-content: center;
              height: 10vh;
              display: flex;
              width: 100vw;
              background-color: #1A09FF;
              img{ 
                margin: 10px;
                width: 35px;  
                background: aliceblue;
                padding: 5px;
                border-radius: 35%;
              }
              a{
                background-color: transparent;
              }
              img:hover{
                background-color: #1E90FF;
                transition: 1s linear;
              }
            }
            
            h3{
              color: #fff;
              background: transparent;
              height: 15vh;
              margin: 2px 0 10px 0;
            }
          
@media screen and (min-width: 540px) {
}


`