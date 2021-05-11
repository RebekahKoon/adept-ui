// componenets/NavBar.js
import React from 'react'
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

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.listener = null
    this.state = {
      status: 'top',
    }
  }

  componentDidMount() {
    this.listener = document.addEventListener('scroll', (e) => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 5) {
        if (this.state.status !== 'scrolled') {
          this.setState({ status: 'scrolled' })
        }
      } else {
        if (this.state.status !== 'top') {
          this.setState({ status: 'top' })
        }
      }
    })
  }

  componentDidUpdate() {
    document.removeEventListener('scroll', this.listener)
  }

  render() {
    return (
      <StyledNavBar
        style={{
          backgroundColor:
            this.state.status === 'top'
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
                <Link href="/search">Search</Link>
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
}
