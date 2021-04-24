/* eslint-disable react/prop-types */
// components/Layout.js
import React from "react";

import Footer from "./Footer.js";

import NavBar from "./NavBar";

import Head from "next/head";

import GlobalStyle from '../styles/LayoutStyle';

import {StyledContentContainer, StyledContent, StyledLayout} from '../styles/LayoutStyle';

const Layout = props => {

    return (

    <StyledLayout>
        <Head>
            <title>Adept</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
        </Head>


        <StyledContentContainer>
            <GlobalStyle />
            
            <NavBar />

            <StyledContent>{props.children}</StyledContent>

            <Footer />

        </StyledContentContainer>
        
        
    </StyledLayout>
    );
}

export default Layout;