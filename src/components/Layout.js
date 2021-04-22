/* eslint-disable react/prop-types */
// components/Layout.js
import React from "react";

import Footer from "./Footer.js";

import NavBar from "./NavBar";

import navButtons from "../config/buttons";

import Head from "next/head";

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html,
body,
#__next {
    height: 100%;
    width: 100%;
    min-height: 100%
}

body {
    margin: 0;
    padding: 0;
    font-family: 'PT Sans', sans-serif;
}

.Layout {

    flex: 1;
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100%;

    .Content {
    
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 701px;
        min-height: 100%;
        padding-bottom: 200 px;

        background: #FFFFFF;
        color: #000000;
        font-family: 'PT Sans', sans-serif;

        a {
            color: inherit;
        }
    
    }

}
`;

const Container = styled.div`
    test-align: center;
`;

const Layout = props => {

    const appTitle = `> Adept`;

    return (

    <div className="Layout">
        <Head>
            <title>Adept</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
        </Head>


        <Container>
            <GlobalStyle />
            
            <NavBar navButtons={navButtons}/>

            <div className="Content">{props.children}</div>

            <Footer appTitle={appTitle} />

        </Container>
        
        
    </div>
    );
}

export default Layout;