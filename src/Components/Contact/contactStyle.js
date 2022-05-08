import styled from "styled-components";

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: "1fr 1fr 1fr";
  grid-template-rows: "1fr 1fr";
  grid-template-areas: "... content ..."
                       "footer footer footer";
  height: 100vh;
  justify-items: center;
  form{
    grid-area: content;
    background-color: #1E90FF;
    align-items: center;
    display: grid;
    justify-items: center;
    border-radius: 1rem;
    padding: 20px;
    max-width: 700px;
    height: 75vh;
    margin: 5vh 0 5vh 0;
    color: #fff;
    h2 {
      background-color: #1E90FF;
      text-decoration: underline white;
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
      
      div{
        align-items: center;
        justify-content: space-evenly;
        height: 10vh;
        display: flex;
        width: 100vw;
        background-color: #1A09FF;
        img{ 
          width: 50px;  
          background: aliceblue;
          padding: 5px;
          border-radius: 35%;
        }
        a{
          background-color: #1A09FF
        }
        img:hover{
          background-color: #1E90FF;
          transition: 1s linear;
        }
      }
      
          footer{
            grid-area: footer;
            width: 100%;
            height: 15vh;
            background-color: #1A09FF;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h3{
              color: #fff;
              background: transparent;
              margin-top: 2px;
            }
          }
`