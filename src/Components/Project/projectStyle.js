import styled from 'styled-components';

export const Projects = styled.section`
display:grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(auto-fit, 1fr);
max-height: max-content;
margin-bottom: 5rem;
width: 100vw;
place-items: center;
h1{
    text-align: center;
    margin: 2.5rem 0 1rem 0;
    font-size: 4rem;
    grid-column: 1/4;
}
div{
    grid-column: 1/4;
    margin-top: 2rem;
    text-align: center;
    justify-content: center;
}
section{
    grid-column: 1/4;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    width: 90vw;     
}
`
export const Item = styled.article`
    box-shadow: 0 0 15px #90e0ef; 
    margin: 2rem;
    width: 15rem;
    text-align: center;
    transition: .3s linear;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
    &:hover{
        transform: scale(1.1); 
    }
    h2{
        grid-row: 2;
        grid-column: 1/3;
    }
    span{
        grid-column: 1/3;
        grid-row: 1;
    }
`

export const Filter = styled.div`
display: flex;
text-align: center;
`