import styled from 'styled-components';

export const Navigation = styled.nav`
position: fixed;
transform: translateX(-50%);
left: 50%;
z-index: 2;
padding: 0rem 1.5rem;
bottom: 0.5rem;
width: max-content;
display: block;
display: flex;
gap: 0.8rem;
background-color: rgba(0,0,0,0.3);
backdrop-filter: blur(15px);
border-radius: 3rem;
a{
   background: none;
   display: flex;
   color: #fff;
   font-size: 1.5rem;
   padding: 0.9rem;
   border-radius: 50%; 
   .icon{
     background: none;
   }
   a:hover {
     background: rgba(0,0,0,0.3);
     transition: 0.5s linear;
     
    }
    a.active {
      color: #1E90FF;
    }
  
  }
`