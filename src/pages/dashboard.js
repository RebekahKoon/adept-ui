import styled from 'styled-components'
import Layout from '../components/Layout'
import MainContentFlexContainer from '../components/styles/MainContentFlexContainer'
import SideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import Education from '../components/Education'
import WorkExperience from '../components/WorkExperience'

export const StyledDashboardBody = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: var(--maxWidth);
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 2.5rem 0px 8rem;
`

export const StyledResume = styled.div`
  display: flex;
  margin: 0 auto;
  width: 68%;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  border-radius: 5px;
`

const DashboardView = () => {
  return (
    <Layout>
      <SearchBar headerText="Discover Jobs and Make Connections" />
      <MainContentFlexContainer>
        <StyledDashboardBody>
          <SideBar />
          <StyledResume>
            <Education />
            <WorkExperience />
          </StyledResume>
        </StyledDashboardBody>
      </MainContentFlexContainer>
    </Layout>
  )
}

export default DashboardView
