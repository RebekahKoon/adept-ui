/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// componenets/NavBar.js
import React from "react";

import Image from 'next/image';

import Link from "next/link";

import {StyledLogin} from '../styles/NavButtonStyle.js'

import StyledNavButton from '../styles/NavButtonStyle.js'

import StyledNavBar from '../styles/NavBarStyle.js'

import {StyledNavLogo, StyledNavButtons} from '../styles/NavBarStyle.js'

const NavBar = props => (
    <StyledNavBar>
            <StyledNavLogo>
                <Link href='/dashboard'>        
                    <Image src='/LogoWhite.png' alt='me' width='64' height='64'/>
                </Link>
            </StyledNavLogo>
            <StyledNavButtons>
                <StyledNavButton>
                    <Link href='/post-job'>Post Job</Link>
                </StyledNavButton>
                <StyledNavButton>
                    <Link href='/search'>Search</Link>
                </StyledNavButton>
                <StyledLogin>
                    <Link href='/login'>Login</Link>
                </StyledLogin>
            </StyledNavButtons>
    </StyledNavBar>
);

export default NavBar;