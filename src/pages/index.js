/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import MainContentFlexContainer from '../components/styles/MainContentFlexContainer'
import { ButtonOutline, ButtonSolid } from '../components/Button'

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

const CenteredContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 1rem 0rem 2.5rem 0rem;
  padding: 5rem 0rem;

  h2 {
    font-size: 3rem;
    line-height: 0;
  }
  p {
    width: 60%;
    color: #585858;
    margin: 0 auto;
    line-height: 2.2rem;
    margin-bottom: 1.5rem;
  }
`

const CenteredButtonSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

const LoginButton = styled(ButtonOutline)`
  width: 20%;
  color: var(--darkPurple);
  border-color: var(--darkPurple);
  font-size: 1.125rem;
  padding: 0.6rem;
  margin-left: 0.5rem;

  :hover {
    color: var(--white);
    background-color: #3f20ba;
  }
`

const CreateAccountButton = styled(ButtonSolid)`
  width: 20%;
  background-color: #3f20ba;
  margin-right: 0.5rem;
  padding: 0.6rem;
  font-size: 1.125rem;

  :hover {
    background-color: var(--darkPurple);
  }
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
            Fill out a resume and define your skill set
          </StyledRow>
          <StyledRow>
            <i className="fas fa-check fa-2x"></i>
            Discover the perfect job or internship
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
    <MainContentFlexContainer>
      <CenteredContainer>
        <h2>Get started today</h2>
        <p>
          Whether you're an employer or a job seeker, Adept can help you get a
          head-start on success and discover new opportunities. Get started on
          your profile today!
        </p>
        <CenteredButtonSection>
          <CreateAccountButton href="/register">
            Create an account
          </CreateAccountButton>
          <LoginButton href="/login">Login</LoginButton>
        </CenteredButtonSection>
      </CenteredContainer>
    </MainContentFlexContainer>
  </Layout>
)

export default Index
