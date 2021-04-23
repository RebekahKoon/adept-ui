/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// componenets/NavBar.js
import React from "react";

import StyledNavButton from '../styles/NavButtonStyle.js'

import Image from 'next/image';

import Link from "next/link";

import StyledLogin from '../styles/NavButtonStyle.js'

import StyledNavBar from '../styles/NavBarStyle.js'

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
            <StyledLogin>
                <Link href='/login'>Login</Link>
            </StyledLogin>
            </div>
        </div>
    </StyledNavBar>
);

export default NavBar;