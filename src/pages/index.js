import React from 'react'
<<<<<<< HEAD
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
=======
import Layout from '../components/Layout'
import Hero from '../components/Hero'

const Index = () => (
  <Layout>
    <Hero />
    {/* add more here if we decide we want more on the landing page */}
  </Layout>
>>>>>>> 37d06483595f0ad6434361c73e59d5168a51356f
)

export default Index
