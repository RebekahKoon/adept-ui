// components/Layout.js
import React from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'
import { Meta } from '../Meta'
import { GlobalStyle } from '../../components/styles'

const Layout = (props) => {
  return (
    <>
      <GlobalStyle />
      <Meta />
      <NavBar />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
