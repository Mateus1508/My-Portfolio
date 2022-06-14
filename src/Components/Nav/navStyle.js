import styled from 'styled-components';

export const Navigation = styled.nav`
position: fixed;
transform: translateX(-50%);
left: 50%; 
z-index: 2;
bottom: 0.5rem;
padding: 0;
width: max-content;
display: flex;
gap: 0.8rem;
background-color: rgba(0,0,0,0.3);
backdrop-filter: blur(15px);
border-radius: 10px;
@media (max-width: 400px){
  padding: 0.5rem 0 0.5rem 0;
  width: 100vw;
  border-radius: 0;
  justify-content: space-evenly;
  gap: 0rem;
  bottom: 0.1rem;
}
a{
  overflow-y: hidden;
  background: none;
  display: flex;
  color: #fff;
  font-size: 1.5rem;
  padding: 0.9rem;
  border-radius: 50%; 
  transition: 0.5s;
  @media (max-width: 400px){
    padding: 0.5rem;  
  }
  .icon{
    background: none;
   }
   a:hover {
     background: rgba(0,0,0,0.3);
      transform: rotate(1turn);
     transition: 0.5s linear;
     cursor: pointer;
     
    }
    a.active {
      color: #1E90FF;
      transform: scale(1.3);
      transition: 1s;
      border-radius: 0;
      background: transparent;
      border-bottom: 1px solid #1E90FF;
    }
  
  }
`