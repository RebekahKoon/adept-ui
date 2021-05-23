// componenets/NavBar.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import StyledNavBar from './NavBarStyle.js'
import {
  StyledNavContainer,
  StyledNavLogo,
  StyledNavItems,
  StyledNavItem,
} from './NavBarStyle.js'
import MainContentContainer from '../styles/MainContentContainer'
import ButtonOutline from '../Button/ButtonOutline'

function NavBar(props) {
  const [listener, setListener] = useState(null)
  const [status, setStatus] = useState('top')
  const handleScroll = (event) => {
    var scrolled = document.scrollingElement.scrollTop
    if (scrolled >= 5) {
      if (status !== 'scrolled') {
        setStatus({ status: 'scrolled' })
      }
    } else {
      if (status !== 'top') {
        setStatus({ status: 'top' })
      }
    }
  }

  useEffect(() => {
    if (status == 'top') {
      setListener(document.addEventListener('scroll', handleScroll))
    } else {
      setListener(document.removeEventListener('scroll', handleScroll))
    }
  })

  /*
  componentDidUpdate() {
    document.removeEventListener('scroll', this.listener)
  }
*/

  return (
    <StyledNavBar
      style={{
        backgroundColor:
          status === 'top' ? 'rgba(87, 15, 241, 0)' : 'rgba(87, 15, 241, 1)',
      }}
    >
      <MainContentContainer>
        <StyledNavContainer>
          <StyledNavLogo>
            <Link href="/dashboard">Adept</Link>
          </StyledNavLogo>

          <StyledNavItems>
            <StyledNavItem>
              <Link href="/post-job">Post Job</Link>
            </StyledNavItem>

            <StyledNavItem>
              <Link href="/search-results?page=0">Search</Link>
            </StyledNavItem>

            <StyledNavItem>
              <ButtonOutline href="/login">Login</ButtonOutline>
            </StyledNavItem>
          </StyledNavItems>
        </StyledNavContainer>
      </MainContentContainer>
    </StyledNavBar>
  )
}

export default NavBar
