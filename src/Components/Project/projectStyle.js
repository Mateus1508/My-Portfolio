import styled from 'styled-components';

export const Projects = styled.div`
float: right;
display: grid;
grid-template-columns: 1fr;
width: 40vw;
height: 100vh;
margin-right: 100px;
color: #fff;
justify-content: center;
align-items: center;
text-align: center;
@media (max-width: 1033px) {
  width: 100vw;
}
h1{
  margin: 1.2rem;
}

.rec.rec-arrow {
background-color: #fff;
visibility: hidden;
}

`
export const Item = styled.article`
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.16);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    height: 85vh;
    width: 500px;
    @media (max-width: 1033px) {
     width: 60vw;
    }
    h2{
      background: transparent;
      padding-bottom: 2.35rem;
      margin: 2rem 0.5rem 2rem 0.5rem;
      border-bottom: 1px solid #fff;
    }
    a{
      cursor: pointer;
      button{
        margin-top: 1rem;
        width: 5rem;
        height: 2rem;
        @media (max-width: 700px) {
          margin-top: 0;
        }
      }
    }
    img{
      height: 20rem;
      width: 15rem;
      border: 5px solid rgba(255, 255, 255, 0);
      @media (max-width: 700px) {
        height: 15rem;
        width: 90%;
      }
    }
    h3{
      background: transparent;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      padding: 0.5rem 0 0.5rem 0;
      margin: 0.5rem;
      @media (max-width: 700px) {
      }

    }
    p{
      background: transparent;
      margin: 15px 15px 0px 15px;
      text-align: justify;
      @media (max-width: 700px) {
        text-align: justify;
        margin: 0 1rem 0.5rem 1rem;
      }
    }
    
    `