// componenets/NavBar.js
import React from "react";

import styled from 'styled-components';

const StyledNavBar = styled.nav`
    .NavBar {
        display: flex;
        justify-content: space-around;
        align-items: center;

        height: 60px;
        width: 100%;
        padding: 10px 0;

        background: #FFFFFF;

        font-family: Arial, sans-serif
        font-size: 22px;
        color: #A1A1A1;

        box-shadow: 0px -2px 15px rgba(50, 50, 50, 0.45);

        a {
            color: inherit;
            text-decoration: none;
        }

        .active {
            color: #FA4141;
        }
    }
`;

const NavBar = () => (
    <StyledNavBar>
        <div className="NavBar">
            NAVBAR
        </div>
    </StyledNavBar>
);

export default NavBar;