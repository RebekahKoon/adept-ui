import styled from 'styled-components';

const StyledNavButton = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
  
    height: 100%;  
    width: 100px;
    cursor: pointer;
`;

export const StyledNavLabel = styled.div`
    font-size: 16px;
    font-weight: bold;
    text-transform: capitalize;
`;

export default StyledNavButton;