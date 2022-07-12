import styled from "styled-components";

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: "1fr";
  grid-template-rows: "1fr 1fr";
  grid-template-areas: "content"
  "footer";
  height: 100vh;
  justify-items: center;
  width: 100vw;
  
  form{
    grid-area: content;
    background: rgba(255, 255, 255, 0.16);
    box-shadow: 0 0 15px #90e0ef;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    width: 50vw;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 75vh;
    margin: 2vh 0 3vh 0;
    color: #000;
    @media (max-width: 800px){
      width: 80vw;
    }
    h2 {
      background-color: transparent; 
      justify-items: center;
      text-align: center;
      overflow-y: hidden;
      grid-row: 1;
      border-bottom: 1px solid #fff;
      margin-bottom: 2rem;
    }
    label{
      overflow-y: hidden;
      font-size: 18px;
      margin: 1rem 0 1rem 0;
    }
  }
  span{
        overflow-y: hidden;
        color: #ffff;
        border-bottom: 1px solid #ff0054;
        background: transparent;
        font-size: 16px;
        margin: 5px;
        font-weight: normal;
      }
        
        textarea {
          font-size: 14px;
          outline: none;
          background-color: rgba(255, 255, 255, 0.2);
          color: #fff;
          border-radius: 5px;
          height: 30%;
          resize: none;
          width: 100%;      
          padding: 5px;    
          &::placeholder{
            color: #fff;
            font-style: italic;
          }
        }  
        input{
          
          background-color: rgba(255, 255, 255, 0.2);
          color: #000;
          align-items: center;
          text-align: center;
          font-size: 16px;
          height: 2rem;
          border-radius: 5px;
          outline: none;
          width: 100%;
          &::placeholder{
            color: #fff;
            font-style: italic;
          }
            }         
            `

export const Footer = styled.footer`
         
            grid-area: footer;
            width: 100%;
            height: 20vh;
            display: flex;
            border-top: 1px solid rgba(0,0,0,0.1);
            flex-direction: column;
            justify-content: start;
            align-items: center;
            a{
              margin-top: 1rem;
              text-decoration: none;
            }
           
`