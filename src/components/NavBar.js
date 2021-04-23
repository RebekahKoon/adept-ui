/* eslint-disable react/prop-types */
// componenets/NavBar.js
import React from "react";

import styled from 'styled-components';

import StyledNavButton from '../styles/NavButtonStyle.js'

import Image from 'next/image';

import Link from "next/link";



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
        flex-shring: 0;

        height: 60px;
        width: 100%;
        padding: 10px ;

        font-family: 'PT Sans', sans-serif;
        font-size: 22px;
        color: #FFFFFF;

        a {
            color: inherit;
            text-decoration: none;
        }

        .active {
            color: #FA4141;
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
            <StyledNavButton>
                <Link href='/post-job'>Post Job</Link>
            </StyledNavButton>
            <StyledNavButton>
                <Link href='/search'>Search</Link>
            </StyledNavButton>
            <StyledNavButton>
                <Link href='/login'>Login</Link>
            </StyledNavButton>
            </div>
        </div>
    </StyledNavBar>
);

export default NavBar;