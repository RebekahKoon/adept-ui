import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import StyledHero from '../styles/LandingStyle'
import {
  StyledImg,
  StyledDivider,
  StyledGetStarted,
} from '../styles/LandingStyle'

const Index = (props) => (
  <StyledImg>
    <Layout>
      <StyledHero>
        <p>
          <span id="span1">Start your journey to</span>
          <span id="span2">become an expert</span>
        </p>
      </StyledHero>
      <StyledDivider>
        <hr></hr>
      </StyledDivider>
      <StyledGetStarted>
        <Link href="/register">Get Started</Link>
      </StyledGetStarted>
    </Layout>
  </StyledImg>
)

export default Index
