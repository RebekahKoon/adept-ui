import styled from 'styled-components';

const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 900px;
    float: right;

    overflow: hidden;

    height: 200px;
    width: 100%;

    background: #191C3C;
`;

export const StyledFooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    float: right;

    height: 200px;
    width: 100%;
    margin-left: 150px;
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