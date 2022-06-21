import styled from 'styled-components';

export const Projects = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h1{
    margin: 2.5rem 0 1rem 0;
    font-size: 4rem;
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
    width: 100vw;
    height: 80vh;
    flex-direction: row;
    @media (max-width:450px){
        flex-direction: column;
        justify-content: center;
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
    @media (max-width:450px){
        margin: 1rem 2rem 1rem 2rem;
        width: 80vw;
        height: 30rem;
       
    }
    &:hover {
        height: 30rem;
        @media (max-width:450px){
            button{
             transform: translateY(-10rem);
             background-color: #0096C7;
             color: #fff;
         }
            
        }
        button{
            display: inline-block;
        }
    }
    img{
        width: 100%;
        max-height: 50%;
        @media (max-width:450px){
            width: 100%;
            max-height: 100%;
            z-index: 5;
            transition: .3s;
            &:hover {
                filter: blur(15px); 
            }
        }
    }
    h3{
        @media (max-width:450px){
            display: none;
           
        }
        
    }
    h2{
        @media (max-width:450px){
            display: none;
           
        }

    }
    p{
        margin: 1rem;
        @media (max-width:450px){
            display: none;
           
        }
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
        @media (max-width:450px){
            display: inline-block;
           
        }
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