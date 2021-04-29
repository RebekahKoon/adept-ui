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
  StyledLi,
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
          <StyledLi>Browse Jobs</StyledLi>
          <StyledLi>Browse Contacts</StyledLi>
          <StyledLi>Skills</StyledLi>
          <StyledLi>Visualize Data</StyledLi>
        </StyledUl>
      </StyledRow1>
      <StyledRow2>
        <StyledUl>
          <StyledLiHeader>FOR EMPLOYERS</StyledLiHeader>
          <StyledLi>Post a Job</StyledLi>
          <StyledLi>View Posted Jobs</StyledLi>
          <StyledLi>View Applicants</StyledLi>
        </StyledUl>
      </StyledRow2>
      <StyledRow3>
        <StyledUl>
          <StyledLiHeader>RESOURCES</StyledLiHeader>
          <StyledLi>About Adept</StyledLi>
          <StyledLi>Contact</StyledLi>
          <StyledLi>View Repository</StyledLi>
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
