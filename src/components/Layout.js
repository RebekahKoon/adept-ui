/* eslint-disable react/prop-types */
// components/Layout.js
import React from "react";

import Footer from "./Footer.js";

import NavBar from "./NavBar";

import Head from "next/head";

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

html,
body,
#__next {
    height: 100%;
    width: 100%;
}

body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smothing: grayscale;
}

.Layout {

    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

}

.content {
    
    flex: 1;
    display: flex;
    flex-direction: column;

}
`;

const Container = styled.div`
    test-align: center;
`;

const Layout = props => (

    <div className="Layout">
        <Head>
            <title>Adept</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
        </Head>

        <Container>
            <GlobalStyle />
            
            <NavBar />

            <div className="Content">{props.children}</div>

            <Footer />
            
        </Container>
        
        
    </div>
);

export default Layout;