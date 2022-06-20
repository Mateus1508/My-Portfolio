import styled from 'styled-components';

export const Projects = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
place-items: center;
h1{
    margin: 2.5rem 0 1rem 0;
    font-size: 4rem;
}
div{
    justify-content: center;
    display: flex;
    width: 100vw;
    height: 80vh;
    flex-direction: row;
}


`
export const Item = styled.article`
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2); 
    margin: 2rem;
    width: 15rem;
    height: 30rem;
    text-align: center;
    img{
        width: 100%;
        max-height: 50%;
    }
    p{
        margin: 1rem;
    }
    button{
        width: 5rem;
        height: 3rem;
        margin: 1rem;
        border-radius: 5px;
        background-color: #90e0ef;
        transition: .5s linear;
        &:hover{
            background-color: #30e5e1;
        }
    }
    
  
`