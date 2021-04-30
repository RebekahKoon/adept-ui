/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// componenets/Footer.js
import React from 'react'

import Link from 'next/link'

import Image from 'next/image'

import StyledFooter from './FooterStyle.js'

import {
  StyledFooterContainer,
  StyledLogo,
  StyledRow1,
  StyledRow2,
  StyledRow3,
  StyledLinks,
  StyledUl,
  StyledLiHeader,
} from './FooterStyle.js'

const Footer = (props) => (
  <StyledFooter>
    <StyledFooterContainer>
      <StyledLogo>
        <Image src="/TextLogo.png" alt="TextLogo" width="150" height="70" />
      </StyledLogo>
      <StyledRow1>
        <StyledUl>
          <StyledLiHeader>FOR JOB SEEKERS</StyledLiHeader>
          <li>Browse Jobs</li>
          <li>Browse Contacts</li>
          <li>Skills</li>
          <li>Visualize Data</li>
        </StyledUl>
      </StyledRow1>
      <StyledRow2>
        <StyledUl>
          <StyledLiHeader>FOR EMPLOYERS</StyledLiHeader>
          <li>Post a Job</li>
          <li>View Posted Jobs</li>
          <li>View Applicants</li>
        </StyledUl>
      </StyledRow2>
      <StyledRow3>
        <StyledUl>
          <StyledLiHeader>RESOURCES</StyledLiHeader>
          <li>About Adept</li>
          <li>Contact</li>
          <li>View Repository</li>
        </StyledUl>
      </StyledRow3>
      <StyledLinks>
        <Image src="/GithubIcon1.png" alt="me" width="40" height="40" />
        <Image src="/GithubIcon2.png" alt="me" width="40" height="40" />
        <Image src="/GithubIcon3.png" alt="me" width="40" height="40" />
      </StyledLinks>
    </StyledFooterContainer>
  </StyledFooter>
)

export default Footer
