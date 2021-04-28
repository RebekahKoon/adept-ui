import styled from 'styled-components';

const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;

    height: 200px;
    width: 100%;

    padding: 0 20px;

    font-family: 'PT Sans', sans-serif;
    font-size: 24px;
    color: #FFFFFF;
    text-transform: uppercase;

    background: #191C3C;

    cursor: pointer;
    
    li {
        margin: 0 10px 10px 0;
        text-transform: none;
    }
`;

export const StyledLogo = styled.div`
    padding: 10%;
    flex: 1 10%;
`;

export const StyledRow1 = styled.div`
    font-size: 14px;
    flex: 2 20%;
`;

export const StyledRow2 = styled.div`
    font-size: 14px;
    flex: 3 20%;
`;

export const StyledRow3 = styled.div`
    font-size: 14px;
    flex: 4 20%;
`;

export const StyledLinks = styled.div`
    flex: 5 20%;
`;

export const StyledUl = styled.ul`
    list-style-type: none;
    margin-bottom: 10px;
`;

export const StyledLi = styled.li`

`;

export const StyledLiHeader = styled.li`
    margin: 0 10px 10px 0;
    color: #919496;
`;



export default StyledFooter;