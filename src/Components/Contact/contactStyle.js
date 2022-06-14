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
    background: rgba(255, 255, 255, 0.16);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    width: 70vw;
    align-items: center;
    display: grid;
    grid-template-areas: 
    "title title"
    "name email"
    "message message"
    "btn btn";
    @media (max-width: 800px) {
    grid-template-areas: 
    "title title"
    "name name"
    "email email"
    "message message"
    "btn btn";  
    }
    justify-items: center;
    padding: 20px;
    height: 70vh;
    margin: 2vh 0 3vh 0;
    color: #fff;
    h2 {
      background-color: transparent; 
      justify-items: center;
      text-align: center;
    }
    fieldset{
      border: 1px solid #fff;
      border-radius: 1rem;
      padding: 0 1rem 1rem 1rem;
      background-color: transparent;
      height: 100%;
      margin: 5px;
      legend{
          background-color: transparent;
          color: #fff;
          margin-bottom: 1.5rem;
          font-size: 25px;
          border-radius: 0.3rem;
          padding: 2px;
      } 
      }
      span{
        color: #f15;
        background: transparent;
        margin: 5px;
        font-weight: bold;
      }
        }
        textarea {
          font-size: 14px;
          outline: none;
          background-color: rgba(255, 255, 255, 0.2);
          color: #fff;
          width: 100%;
          overflow-y: hidden;
          
        }  
            input{
              margin-bottom: 1px;
              background-color: rgba(255, 255, 255, 0.2);
              color: #fff;
              border-bottom: 1px solid #fff;
              align-items: center;
              text-align: center;
              font-size: 16px;
              height: 1.5rem;
              outline: none;
              width: 100%;
            }
            .name{
              grid-area: name;
              width: 95%;
            }
            .email{
              grid-area: email;
              width: 95%;
            }
            .title{
              grid-area: title;
              text-align: center;
            }
            .message{
              grid-area: message;
              width: 97.5%;
            }
            .btn{
              grid-area: btn;
            }
            button{
              font-size: 20px;
              background-color: aliceblue;
              width: 100px;
              height: 5vh;
              border-radius: 5px;
              margin: 10px;
              justify-content: center;
            
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
          
`