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
import useScrollFromTop from './useScrollFromTop'
import useUser from '../../lib/useUser'

const AuthedNavBar = (params) => {
  return (
    <StyledNavContainer>
      <StyledNavLogo>
        <Link href="/">Adept</Link>
      </StyledNavLogo>

      <StyledNavItems>
        <StyledNavItem>
          <Link href="/post-job">Post Job</Link>
        </StyledNavItem>

        <StyledNavItem>
          <Link href="/search-results?page=1">Search</Link>
        </StyledNavItem>

        <StyledNavItem>
          <ButtonOutline href="/login">Login</ButtonOutline>
        </StyledNavItem>
      </StyledNavItems>
    </StyledNavContainer>
  )
}

const UnauthedNavBar = (params) => {
  return (
    <StyledNavContainer>
      <StyledNavLogo>
        <Link href="/">Adept</Link>
      </StyledNavLogo>

      <StyledNavItems>
        <StyledNavItem>
          <Link href="/search-results?page=1">View jobs</Link>
        </StyledNavItem>

        <StyledNavItem>
          <Link href="/post-job">Sign in</Link>
        </StyledNavItem>

        <StyledNavItem>
          <ButtonOutline href="/register">Sign up</ButtonOutline>
        </StyledNavItem>
      </StyledNavItems>
    </StyledNavContainer>
  )
}

const NavBar = (props) => {
  const isTop = useScrollFromTop()
  const { user } = useUser()

  return (
    <StyledNavBar
      style={{
        backgroundColor: isTop
          ? 'rgba(87, 15, 241, 0)'
          : 'rgba(87, 15, 241, 1)',
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
              <Link href="/search-results?page=1">Search</Link>
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
