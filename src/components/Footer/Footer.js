// componenets/Footer.js
import React from 'react'

import Image from 'next/image'

import StyledFooter from './FooterStyle.js'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import {
  StyledFooterContainer,
  StyledLogo,
  StyledColumn,
  StyledLinkContainer,
  StyledLink,
  StyledUl,
  StyledLiHeader,
} from './FooterStyle.js'

const Footer = (props) => (
  <StyledFooter>
    <StyledFooterContainer>
      <StyledLogo>Adept</StyledLogo>
      <StyledColumn columnNumber="2">
        <StyledUl>
          <StyledLiHeader>FOR JOB SEEKERS</StyledLiHeader>
          <li>Browse Jobs</li>
          <li>Browse Contacts</li>
          <li>Skills</li>
          <li>Visualize Data</li>
        </StyledUl>
      </StyledColumn>
      <StyledColumn columnNumber="3">
        <StyledUl>
          <StyledLiHeader>FOR EMPLOYERS</StyledLiHeader>
          <li>Post a Job</li>
          <li>View Posted Jobs</li>
          <li>View Applicants</li>
        </StyledUl>
      </StyledColumn>
      <StyledColumn columnNumber="4">
        <StyledUl>
          <StyledLiHeader>RESOURCES</StyledLiHeader>
          <li>About Adept</li>
          <li>Contact</li>
          <li>View Repository</li>
        </StyledUl>
      </StyledColumn>
      <StyledLinkContainer>
        <StyledLink columnNumber="5">
          <i className="fab fa-github"></i>
        </StyledLink>
        <StyledLink columnNumber="6">
          <i class="fab fa-github-square"></i>
        </StyledLink>
        <StyledLink columnNumber="7">
          <i class="fab fa-github-alt"></i>
        </StyledLink>
      </StyledLinkContainer>
    </StyledFooterContainer>
  </StyledFooter>
)

export default Footer
