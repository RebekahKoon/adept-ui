import React from 'react'

import Footer from '../Footer'
import NavBar from '../NavBar'
import { Meta } from '../Meta'
import { GlobalStyle } from '../../components/styles'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Meta />
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
