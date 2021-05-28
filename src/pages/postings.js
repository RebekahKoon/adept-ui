import { useState } from 'react'
import styled from 'styled-components'
import client from '../apollo/apolloClient'
import { GET_USER_BY_ID } from '../queries/getUserById'
import { GET_ALL_SKILLS } from '../queries/getAllSkills'
import Layout from '../components/Layout'
import MainContentFlexContainer from '../components/styles/MainContentFlexContainer'
import StyledSideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import { JobPostCard } from '../components/JobCard'
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

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .fa-check-circle {
    margin-right: 0.5rem;
    justify-content: center;
    align-items: center;
    color: var(--lightPurple);
  }
`

const TopSkill = ({ topSkill }) => {
  return (
    <>
      <StyledRow>
        <i className="far fa-check-circle fa-2x"></i>
        <div>
          <h4 style={{ lineHeight: '0rem', marginBottom: '1rem' }}>
            {topSkill[0]}
          </h4>
          Appeared in {topSkill[1]} applications
        </div>
      </StyledRow>
      <hr style={{ visibility: 'hidden', margin: '1.25rem 0' }}></hr>
    </>
  )
}

const Sidebar = ({ currentUser, allSkills }) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  const skillNames = allSkills.map((skill) => skill.name)
  const skillCount = skillNames.reduce(
    (name, curr) => ((name[curr] = 0), name),
    {}
  )

  currentUser.jobPostings.map((jobPosting) =>
    jobPosting.skillsRequired.map((skill) => (skillCount[skill.name] += 1))
  )

  let topSkills = []
  for (let skill in skillCount) {
    topSkills.push([skill, skillCount[skill]])
  }

  topSkills
    .sort((a, b) => {
      return a[1] - b[1]
    })
    .reverse()

  return (
    <StyledSideBar>
      <h3>Top Skills in Your Job Applications</h3>
      {currentUser.jobPostings.length > 0 &&
        topSkills
          .slice(0, 5)
          .map(
            (topSkill) =>
              topSkill[1] > 0 && (
                <TopSkill topSkill={topSkill} key={topSkill[0]} />
              )
          )}
      <SkillStatsButton onClick={openModal}>
        View More Statistics
      </SkillStatsButton>
      <ModalContext.Provider
        value={{
          isOpen,
          closeModal,
        }}
      >
        <StatisticsModal
          skillCount={skillCount}
          totalApplications={currentUser.jobPostings.length}
        />
      </ModalContext.Provider>
    </StyledSideBar>
  )
}

const JobPosting = (props) => {
  return (
    <Layout>
      <SearchBar headerText="Discover Jobs and Make Connections" />
      <MainContentFlexContainer>
        <StyledBody>
          <Sidebar
            currentUser={props.currentUser}
            allSkills={props.allSkills}
          />
          <StyledJobContainer>
            {props.currentUser.jobPostings.map((jobPosting) => (
              <>
                <JobPostCard
                  jobPosting={jobPosting}
                  key={jobPosting.jobPostId}
                />
              </>
            ))}
          </StyledJobContainer>
        </StyledBody>
      </MainContentFlexContainer>
    </Layout>
  )
}

export default JobPosting

export const getServerSideProps = withSession(async ({ req, res }) => {
  const user = req.session.get('user')

  if (user === undefined) {
    res.setHeader('location', '/login')
    res.statusCode = 302
    res.end()
    return { props: {} }
  }

  const { data: skillsData } = await client.query({
    query: GET_ALL_SKILLS,
  })

  const { data: userData } = await client.query({
    query: GET_USER_BY_ID,
    variables: { userId: user.userId },
  })

  return {
    props: {
      allSkills: skillsData.getAllSkills,
      currentUser: userData.getUserById,
    },
  }
})
