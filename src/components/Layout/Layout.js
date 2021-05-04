// components/Layout.js
import React from 'react'

import Footer from '../Footer'

import NavBar from '../NavBar'

import SearchBar from '../SearchBar'

import Head from 'next/head'

import GlobalStyle from './LayoutStyle'

import {
  StyledContentContainer,
  StyledContent,
  StyledLayout,
} from './LayoutStyle'

const Layout = (props) => {
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
  )
}

export default Layout
