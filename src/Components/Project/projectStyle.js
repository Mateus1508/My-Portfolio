import styled from 'styled-components';

export const Projects = styled.section`
height: 100vh;
@media (max-width:1200px){
    height: max-content;
}
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h1{
    margin: 2.5rem 0 1rem 0;
    font-size: 4rem;
    height: 15vh;
}
span{
    display: none;
    @media (max-width:450px){
        opacity: 0;
        display: block;
        animation: fadeIn 2s ease-in 5 alternate;
    }
}
div{
    justify-content: center;
    display: flex;
    width: max-content;
    height: 80vh;
    flex-direction: row;
    @media (max-width:1200px){
        height: max-content;
    }
    @media (max-width:930px){
        height: max-content;
        flex-direction: column;
        justify-self: center;
    }
}


`
export const Item = styled.article`
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2); 
    margin: 2rem;
    width: 15rem;
    height: 25rem;
    text-align: center;
    overflow-y: hidden;
    transition: .3s linear;

    &:hover {
        height: 30rem;
       
        button{
            display: inline-block;
        }
            
        }
    
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
        cursor: pointer;
        display: none;
        
        &:hover{
            background-color: #0096C7;
            color: #fff;

        }
    }
    @keyframes fadeIn {
        from { opacity: 1}
        to { opacity:0;
        display: none;}
    }
  
`