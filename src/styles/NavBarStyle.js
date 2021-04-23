import styled from 'styled-components';

const StyledNavBar = styled.nav`
    .NavBar {
        display: flex;
        align-items: center;

        height: 60px;
        width: 100%;
        padding: 10px ;

        list-style-type: none;

        background: #570FF1;
        
    }

    #NavLogo{
        flex: 1 100%;
        padding: 10%;
    }

    #NavButtons{
        display: flex;
        justify-content: center;
        flex: 2 33%;

        height: 60px;
        width: 100%;
        padding: 10px ;


        a {
            color: inherit;
            text-decoration: none;
        }
`;

export default StyledNavBar;