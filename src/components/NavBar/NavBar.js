/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// componenets/NavBar.js
import React from 'react'

import Image from 'next/image'

import Link from 'next/link'

import { StyledLogin } from './NavButtonStyle.js'

import StyledNavButton from './NavButtonStyle.js'

import StyledNavBar from './NavBarStyle.js'

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
          backgroundColor: this.state.status === 'top' ? '' : '#570FF1',
        }}
      >
        <StyledNavContainer>
          <StyledNavLogo>
            <Link href="/dashboard">
              <Image src="/TextLogo.png" alt="me" width="150" height="64" />
            </Link>
          </StyledNavLogo>

          <StyledNavButtons>
            <StyledNavButton>
              <Link href="/post-job">Post Job</Link>
            </StyledNavButton>

            <StyledNavButton>
              <Link href="/search">Search</Link>
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
