/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import MainContentFlexContainer from '../components/styles/MainContentFlexContainer'

const StyledBackground = styled.div`
  background-color: #2d1f66;
  padding: 8rem 0rem 12rem 0rem;
  justify-content: center;
`

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 4rem 5rem;
  color: white;
  font-size: 1.15rem;
  justify-content: center;

  h2 {
    font-size: 2.75rem;
    line-height: 0;
  }
  p {
    line-height: 2.2rem;
    margin-bottom: 2.5rem;
  }
`

const StyledRow = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;

  .fa-check {
    color: var(--lightPurple);
    margin-right: 1.25rem;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 2.5rem;
`

const Index = () => (
  <Layout>
    <Hero />
    <StyledBackground>
      <MainContentFlexContainer>
        <StyledColumn>
          <h2>What is Adept?</h2>
          <p>
            Adept provides an easy way to search for jobs, create contacts, and
            keep track of what skills you are proficient in. Whether you are a
            job seeker or looking for new hires, Adept can help make the job
            process easier.
          </p>
          <StyledRow>
            <i className="fas fa-check fa-2x"></i>
            Fill out a resume and define your skillset
          </StyledRow>
          <StyledRow>
            <i className="fas fa-check fa-2x"></i>
            Discover the perfect job for you
          </StyledRow>
          <StyledRow>
            <i className="fas fa-check fa-2x"></i>
            Make connections with other users
          </StyledRow>
          <StyledRow>
            <i className="fas fa-check fa-2x"></i>
            Keep track of your job applications
          </StyledRow>
        </StyledColumn>
        <StyledColumn>
          <ImageContainer>
            <img src="/computer-person.png" style={{ width: '70%' }} />
          </ImageContainer>
          <h2>As an Employer</h2>
          <p>
            Adept offers an easy way to post new jobs and reveal who has applied
            for your job postings. Specify what skills you're looking for to
            attract top job candidates. Make an impact and start creating your
            network today!
          </p>
        </StyledColumn>
      </MainContentFlexContainer>
    </StyledBackground>
  </Layout>
)

export default Index
