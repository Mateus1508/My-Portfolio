import styled from "styled-components/";

export const Projects = styled.section`
display:grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(auto-fit, 1fr);
max-height: max-content;
margin-bottom: 5rem;
width: 100vw;
place-items: center;
h1{
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
    width: 95vw;     
    overflow-y: auto;
    height: 60vh;
    border: 1px solid rgba(255, 255, 255, 0.1);
    &::-webkit-scrollbar{
    width: 2px;
    background-color: rgba(255, 255, 255, 0.1);
}
}
`;
export const Item = styled.article`
    box-shadow: 0 0 5px #90e0ef;
    color: #fff; 
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 5px;
    flex-wrap: wrap;
    background-color: rgb(2, 62, 138, 0.5);
    padding: 10px;
    margin: 5px;
    width: 300px;
    height: 150px;
    h2 {
        font-size: 16px;
        text-align: justify;
    }
    span {
        border: 1px solid #fff;
        padding: 5px;
        width: 100px;
        border-radius: 5px;
    }
    div {
        margin: 0;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        a, small {
            text-decoration: none;
            color: #fff;
        }
    }
`;


