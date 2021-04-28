import styled from 'styled-components';

const StyledNavBar = styled.nav`
    display: flex;
    align-items: center;
    position: absolute;
    float: right;
    top: 20px;

    overflow: hidden;

    height: 60px;
    width: 100%;
`;

export const StyledNavContainer = styled.div`
    display: flex;
    align-items: center;    
    

    height: 60px;
    width: 100%;

    margin-left: 150px;
    margin-right: 150px;

    list-style-type: none;
`;

export const StyledNavLogo = styled.div`
    flex: 1 100%;
    padding: 10%;
`;

export const StyledNavButtons = styled.div`
    display: flex;
    justify-content: center;
    flex: 2 33%;

    height: 40px;
    width: 100%;
    padding: 10px ;


    a {
        color: inherit;
        text-decoration: none;
    }

`;

export default StyledNavBar;