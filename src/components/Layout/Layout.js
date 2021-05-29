import Footer from '../Footer'
import NavBar from '../NavBar'
import { Meta } from '../Meta'
import { GlobalStyle } from '../../components/styles'

const Layout = ({
  children,
  hasNav = true,
  hasFooter = true,
  navFadeIn = true,
}) => {
  return (
    <>
      <GlobalStyle />
      <Meta />
      {hasNav && <NavBar navFadeIn={navFadeIn} />}
      {children}
      {hasFooter && <Footer />}
    </>
  )
}

export default Layout
