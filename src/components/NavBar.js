/* eslint-disable react/prop-types */
// componenets/NavBar.js
import React from "react";

import styled from 'styled-components';

import NavButton from "./NavButton"

import Image from 'next/image';

import Link from "next/link";



const StyledNavBar = styled.nav`
    .NavBar {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 60px;
        width: 100%;
        padding: 10px ;

        list-style-type: none;

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
            <div id="NavLogo">
                <Link href='/dashboard'>        
                    <Image src='/LogoWhite.png' alt='me' width='64' height='64'/>
                </Link>
            </div>
            <div id="NavButtons">
                {props.navButtons.map(button => (
                    <NavButton
                    key={button.path}
                    path={button.path}
                    label={button.label}
                    />
                ))}
            </div>
        </div>
    </StyledNavBar>
);

export default NavBar;