import styled from 'styled-components'
import client from '../apollo/apolloClient'
import Layout from '../components/Layout'
import MainContentFlexContainer from '../components/styles/MainContentFlexContainer'
import StyledSideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import { JobPostSkill } from '../components/Skill'
import JobCard from '../components/JobCard'

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

const ViewUserJobPostings = () => {
  return (
    <Layout>
      <SearchBar headerText="Discover Jobs and Make Connections" />
      <MainContentFlexContainer>
        <StyledBody>
          <StyledSideBar>
            <JobPostSkill name="Communication" />
          </StyledSideBar>
          <StyledJobContainer>
            <JobCard />
            <JobCard />
          </StyledJobContainer>
        </StyledBody>
      </MainContentFlexContainer>
    </Layout>
  )
}

export default ViewUserJobPostings
