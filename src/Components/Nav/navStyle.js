import styled from 'styled-components';

export const Navigation = styled.nav`
position: fixed;
left: 50%;
transform: translateX(-50%);
bottom: 2rem;
gap: 0.8rem;
display: block;
background-color: rgba(0,0,0,0.3);
backdrop-filter: blur(15px);
 a{
   background: transparent;
   padding: 0.9rem;
   border-radius: 50%;
   display: flex;
   color: #fff;
   font-size: 1.1rem;
  
  &:hover {
    background: rgba(0,0,0,0.3);
  }
  &:active {
    background: #fff;
    color: #fff;
  }
  }
/* img{
   margin: 0 10px 0 10px;
    width: 25px;
  } */
`