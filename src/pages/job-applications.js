import { useState } from 'react'
import styled from 'styled-components'
import client from '../apollo/apolloClient'
import { GET_USER_BY_ID } from '../queries/getUserById'
import Layout from '../components/Layout'
import MainContentFlexContainer from '../components/styles/MainContentFlexContainer'
import StyledSideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import JobCard from '../components/JobCard'
import { RadioInput } from '../components/Input'
import { StyledButtonSolid } from '../components/Button'
import ModalContext from '../context/ModalContext'
import { StatisticsModal } from '../components/Modal'
import withSession from '../lib/session'

const StyledBody = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: var(--maxWidth);
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 2.5rem 0px 8rem;
`

const StyledJobContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 68%;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  border-radius: 5px;
`

const SkillStatsButton = styled(StyledButtonSolid)`
  margin-top: 1.5rem;
  width: 100%;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  margin-left: 5px;
  :hover {
    background-color: #4510b7;
  }
`

const ViewUserJobPostings = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  const handleInputChange = () => {
    console.log('hi')
  }

  console.log(props.currentUser)
  console.log(props.currentUser.jobApplications)

  return (
    <Layout>
      <SearchBar headerText="Discover Jobs and Make Connections" />
      <MainContentFlexContainer>
        <StyledBody>
          <StyledSideBar>
            <h4 style={{ lineHeight: '0rem' }}>Docker</h4>
            Appeared in 25% of your applications
            <RadioInput
              // {...register('city', { required: false })}
              type="checkbox"
              placeholder="Compenent?"
              id="isCompetent"
              // isInvalid={errors.city}
              label="Are you comfortable with this skill?"
              noPadding={true}
              onChange={handleInputChange}
            />
            <hr></hr>
            <h4 style={{ lineHeight: '0rem' }}>Communication</h4>
            Appeared in 100% of your applications
            <RadioInput
              // {...register('city', { required: false })}
              type="checkbox"
              placeholder="Compenent?"
              id="isCompetent"
              // isInvalid={errors.city}
              label="Are you comfortable with this skill?"
              noPadding={true}
              onChange={handleInputChange}
            />
            <hr></hr>
            <h4 style={{ lineHeight: '0rem' }}>React</h4>
            Appeared in 50% of your applications
            <RadioInput
              // {...register('city', { required: false })}
              type="checkbox"
              placeholder="Compenent?"
              id="isCompetent"
              // isInvalid={errors.city}
              label="Are you comfortable with this skill?"
              noPadding={true}
              onChange={handleInputChange}
            />
            <SkillStatsButton onClick={openModal}>
              View More Statistics
            </SkillStatsButton>
            <ModalContext.Provider
              value={{
                isOpen,
                closeModal,
              }}
            >
              <StatisticsModal />
            </ModalContext.Provider>
          </StyledSideBar>
          <StyledJobContainer>
            {props.currentUser.jobApplications.map((jobApplication) => (
              <>
                {console.log(jobApplication)}
                <JobCard
                  jobApplication={jobApplication}
                  key={jobApplication.jobApId}
                />
              </>
            ))}
            {/* <JobCard />
            <JobCard /> */}
          </StyledJobContainer>
        </StyledBody>
      </MainContentFlexContainer>
    </Layout>
  )
}

export default ViewUserJobPostings

export const getServerSideProps = withSession(async ({ req, res }) => {
  const user = req.session.get('user')

  if (user === undefined) {
    res.setHeader('location', '/login')
    res.statusCode = 302
    res.end()
    return { props: {} }
  }

  const { data: userData } = await client.query({
    query: GET_USER_BY_ID,
    variables: { userId: user.userId },
  })

  return {
    props: {
      currentUser: userData.getUserById,
    },
  }
})
