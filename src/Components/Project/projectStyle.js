import styled from 'styled-components';

export const Projects = styled.section`
display:grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(auto-fit, 1fr);
max-height: max-content;
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
    width: 80vw;   
    max-height: 70vh;   
    border: 1px solid #90e0ef; 
    overflow-y: scroll;
}
`
export const Item = styled.article`
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2); 
    margin: 2rem;
    width: 15rem;
    text-align: center;
    transition: .3s linear;
    button{
        width: 5rem;
        height: 3rem;
        margin: 1rem;
        border-radius: 5px;
        background-color: #90e0ef;
        transition: .5s linear;
        cursor: pointer;
       
        
        &:hover{
            background-color: #0096C7;
            color: #fff;

        }
    }
`

export const Filter = styled.div`
display: flex;
text-align: center;
    button {
        background: #868fba;
        color: #ffff;
        border: 0;
        padding: 5px 10px;
        margin: 5px;
        border-radius: 3px;
        font-size: 1rem;
        transition: 0.3s ease-in;
    }
    button:hover {
        background: #861cbe;
    }
`