/* eslint-disable react/prop-types */
// componenets/NavBar.js
import React from "react";

import styled from 'styled-components';

import NavButton from "./NavButton"

const StyledNavBar = styled.nav`
    .NavBar {
        display: flex;
        justify-content: space-around;
        align-items: center;

        height: 60px;
        width: 100%;
        padding: 10px 0;

        background: #570FF1;

        font-family: 'PT Sans', sans-serif;
        font-size: 22px;
        color: #FFFFFF;

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

const NavBar = props => (
    <StyledNavBar>
        <div className="NavBar">
            {props.navButtons.map(button => (
                <NavButton
                key={button.path}
                path={button.path}
                label={button.label}
                />
            ))}
        </div>
    </StyledNavBar>
);

export default NavBar;