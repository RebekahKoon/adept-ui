import styled from 'styled-components';

const StyledNavButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  
    height: 100%;  
    width: 100px;
    cursor: pointer;

    font-size: 16px;
    font-weight: bold;
    text-transform: capitalize;
    color: #FFFFFF;
    font-family: 'PT Sans', sans-serif;

`;

export const StyledLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;  
    width: 100px;
    cursor: pointer;

    font-size: 16px;
    font-weight: bold;
    text-transform: capitalize;
    color: #FFFFFF;
    font-family: 'PT Sans', sans-serif;
    border-style: solid;
    border-radius: 12px;

    ${StyledNavButton}:hover & {
        background: "#efefef"
      }

`;

export const StyledNavLink = styled.div`
    ${StyledNavButton}:hover & {
        background: "#efefef"
    }

`;

export default StyledNavButton;