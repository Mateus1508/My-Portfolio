import styled from 'styled-components/macro';

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
    color: #fff;
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
    overflow-y: auto;
    height: 60vh;
    border: 1px solid rgba(255, 255, 255, 0.1);
    &::-webkit-scrollbar{
    width: 2px;
    background-color: rgba(255, 255, 255, 0.1);
}
}
`
export const Item = styled.article`
    box-shadow: 0 0 15px #90e0ef; 
    margin: 2rem;
    width: 15rem;
    height: max-content;
    background: #023e8a;
    text-align: center;
    transition: .3s linear;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
    color: #fff;
    &:hover{
        transform: scale(1.1); 
    }
    h2{
        grid-row: 2;
        grid-column: 1/3;
        margin: 1rem;
    }
    span{
        grid-column: 1/3;
        grid-row: 1;
    }
    small{
        display: flex;
        flex-wrap: wrap;
    }
    h4{
        color: #bbbb;
    }
`

export const Filter = styled.div`
display: flex;
text-align: center;
flex-wrap: wrap;
margin-bottom: 1rem;
border-bottom: 1px solid #fff;
`
