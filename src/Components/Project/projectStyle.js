import styled from 'styled-components';

export const Projects = styled.div`
float: right;
grid-template-columns: 1fr;
width: 40vw;
height: 100vh;
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
@media (max-width: 1033px) {
visibility: hidden;
}
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
    width: 30vw;
    @media (max-width: 1033px) {
    width: 50vw;
  }
    h2{
      background: transparent;
      padding-bottom: 2rem;
      margin: 2rem 0.5rem 2rem 0.5rem;
      border-bottom: 1px solid #fff;
    }
    a{
      cursor: pointer;
      img{
        height: 20rem;
        width: 15rem;
      }
    }
    h3{
      background: transparent;
      margin: 1rem;
    }
    p{
      background: transparent;
      margin: 10px;
      
    }
    
    `