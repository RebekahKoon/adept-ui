/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// componenets/NavBar.js
import React from "react";

import Image from 'next/image';

import Link from "next/link";

import {StyledLogin, StyledNavLink} from './NavButtonStyle.js'

import StyledNavButton from './NavButtonStyle.js'

import StyledNavBar from './NavBarStyle.js'

import {StyledNavContainer, StyledNavLogo, StyledNavButtons} from './NavBarStyle.js'

const NavBar = props => (
    <StyledNavBar>
        <StyledNavContainer>
            <StyledNavLogo>
                <Link href='/dashboard'>        
                    <Image src='/TextLogo.png' alt='me' width='150' height='64'/>
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
        </StyledNavContainer>
    </StyledNavBar>
);

export default NavBar;