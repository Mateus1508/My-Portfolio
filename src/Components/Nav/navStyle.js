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
background: #1115;
border-radius: 10px;
@media (max-width: 450px){
  padding: 0.5rem 0 0.5rem 0;
  width: 100vw;
  border-radius: 0;
  justify-content: space-evenly;
  gap: 0rem;
  bottom: 0rem;
}
a{
  overflow-y: hidden;
  background: transparent;
  display: flex;
  color: #fff;
  font-size: 1.5rem;
  padding: 0.9rem;
  border-radius: 0; 
  transition: 0.3s;
  @media (max-width: 450px){
    padding: 0.5rem;  
  }
  .icon{
    background: transparent;
   }
   a:hover {
     background: transparent;
     transition: 0.5s linear;
     cursor: pointer;
    }
    a.active {
      animation: shake 0.5s linear 1;
      color: #90e0ef;
      transform:  scale(1.3);
      transition: .3s;
      border-radius: 0;
      background: transparent;
      border-bottom: 1px solid #90e0ef;
    }
  
  }

  @keyframes shake {
    0%{
      transform: translateX(1px);
    }
    20%{
      transform: translateX(-1px);
    }
    50%{
      transform: translateX(1px);
    }
    70%{
      transform: translateX(-1px);
    }
    100%{
      transform: translateX(0px) scale(1.3);
    }
    
  }
`