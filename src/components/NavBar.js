/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// componenets/NavBar.js
import React from "react";

import Image from 'next/image';

import Link from "next/link";

import {StyledLogin, StyledNavLink} from '../styles/NavButtonStyle.js'

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
                    <StyledNavLink>
                        <Link href='/post-job'>Post Job</Link>
                    </StyledNavLink>
                </StyledNavButton>

                <StyledNavButton>
                    <StyledNavLink>
                        <Link href='/search'>Search</Link>
                    </StyledNavLink>
                </StyledNavButton>

                <StyledNavButton>
                    <StyledLogin>
                        <Link href='/login'>Login</Link>
                    </StyledLogin>
                </StyledNavButton>
                
            </StyledNavButtons>
    </StyledNavBar>
);

export default NavBar;