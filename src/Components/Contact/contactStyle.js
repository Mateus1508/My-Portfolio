import styled from "styled-components/";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-items: center;
  width: 100vw;
  padding: 10px 0;
  form{
    border-radius: 10px;
    background: rgb(2, 62, 138, 0.5);
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
    color: #fff;
    @media (max-width: 800px){
      width: 80vw;
    }
    h2 {
      background-color: transparent; 
      justify-items: center;
      text-align: center;
      overflow-y: hidden;
      border-bottom: 1px solid #fff;
      margin-bottom: 2rem;
    }
    label{
      overflow-y: hidden;
      font-size: 18px;
      margin: 1rem 0 1rem 0;
    }
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
            color: #444;
            font-style: italic;
          }
        }  
        input{
          
          background-color: rgba(255, 255, 255, 0.2);
          color: #fff;
          align-items: center;
          text-align: center;
          font-size: 16px;
          height: 2rem;
          border-radius: 5px;
          outline: none;
          width: 100%;
          &::placeholder{
            color: #444;
            font-style: italic;
          }
            }         
            `;

export const Footer = styled.footer`
         
            width: 100%;
            height: 20vh;
            display: flex;
            border-top: 1px solid rgba(0,0,0,0.1);
            flex-direction: column;
            justify-content: start;
            align-items: center;
            a{
              margin-top: 1rem;
              color: #023e8a;
              text-decoration: none;
            }
           
`;