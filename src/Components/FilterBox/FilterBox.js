import styled from "styled-components";

export const FilterBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    width: max-content;
    margin-bottom: 1rem;
    border-bottom: 1px solid #fff;
    @media (max-width:920px){
        width: 90vw;
        flex-wrap: wrap;
}
`;