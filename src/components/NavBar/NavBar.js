// componenets/NavBar.js
import React from 'react'
import Link from 'next/link'
import StyledNavButton from './NavButtonStyle.js'
import StyledNavBar from './NavBarStyle.js'
import { StyledLogin } from './NavButtonStyle.js'
import {
  StyledNavContainer,
  StyledNavLogo,
  StyledNavButtons,
} from './NavBarStyle.js'

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
        <StyledNavContainer>
          <StyledNavLogo>
            <Link href="/dashboard">Adept</Link>
          </StyledNavLogo>

          <StyledNavButtons>
            <StyledNavButton>
              <Link href="/post-job">Post Job</Link>
            </StyledNavButton>

            <StyledNavButton>
              <Link href="/search-results">Search</Link>
            </StyledNavButton>

            <StyledNavButton>
              <StyledLogin>
                <Link href="/login">Login</Link>
              </StyledLogin>
            </StyledNavButton>
          </StyledNavButtons>
        </StyledNavContainer>
      </StyledNavBar>
    )
  }
}
