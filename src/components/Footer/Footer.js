// componenets/Footer.js
import React from 'react'

import Image from 'next/image'

import StyledFooter from './FooterStyle.js'

import {
  StyledFooterContainer,
  StyledLogo,
  StyledColumn,
  StyledLinks,
  StyledUl,
  StyledLiHeader,
} from './FooterStyle.js'

const Footer = (props) => (
  <StyledFooter>
    <StyledFooterContainer>
      <StyledLogo>Adept</StyledLogo>
      <StyledColumn columnNumber="1">
        <StyledUl>
          <StyledLiHeader>FOR JOB SEEKERS</StyledLiHeader>
          <li>Browse Jobs</li>
          <li>Browse Contacts</li>
          <li>Skills</li>
          <li>Visualize Data</li>
        </StyledUl>
      </StyledColumn>
      <StyledColumn columnNumber="2">
        <StyledUl>
          <StyledLiHeader>FOR EMPLOYERS</StyledLiHeader>
          <li>Post a Job</li>
          <li>View Posted Jobs</li>
          <li>View Applicants</li>
        </StyledUl>
      </StyledColumn>
      <StyledColumn columnNumber="3">
        <StyledUl>
          <StyledLiHeader>RESOURCES</StyledLiHeader>
          <li>About Adept</li>
          <li>Contact</li>
          <li>View Repository</li>
        </StyledUl>
      </StyledColumn>
      <StyledLinks>
        <Image src="/GithubIcon1.png" alt="me" width="40" height="40" />
        <Image src="/GithubIcon2.png" alt="me" width="40" height="40" />
        <Image src="/GithubIcon3.png" alt="me" width="40" height="40" />
      </StyledLinks>
    </StyledFooterContainer>
  </StyledFooter>
)

export default Footer
