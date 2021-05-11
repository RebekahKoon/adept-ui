import styled from 'styled-components'
import Layout from '../components/Layout'
import MainContentFlexContainer from '../components/styles/MainContentFlexContainer'
import StyledSideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import Education from '../components/Education'
import WorkExperience from '../components/WorkExperience'
import { StyledButtonSolid } from '../components/Button'

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

const ManageContactsButton = styled(StyledButtonSolid)`
  margin-top: 1rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  width: 100%;
`

const SideBarProfile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  line-height: 1.3rem;

  h2 {
    line-height: 0em;
  }

  .fa-user-circle {
    color: #585858;
  }
`

const DashboardSideBar = () => {
  return (
    <StyledSideBar>
      <SideBarProfile>
        <p>
          <i className="fas fa-user-circle fa-5x"></i>
        </p>
        <h2>Rebekah Koon</h2>
        <div>Oregon State University</div>
        <div>IT Assistant AKA Dishwasher</div>
        <div style={{ color: '#585858' }}>Eugene, OR</div>
      </SideBarProfile>
      <hr></hr>
      <h2>Skills</h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id justo
      felis. Proin tristique ligula ut odio faucibus tincidunt. Sed et lectus
      sed tortor ultricies hendrerit. In hac habitasse platea dictumst.
      Pellentesque eget suscipit mi. Cras aliquam nulla vitae blandit dapibus.
      Sed ornare elit viverra nisl aliquet pretium.
      <hr></hr>
      <h2>Contacts</h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id justo
      felis. Proin tristique ligula ut odio faucibus tincidunt. Sed et lectus
      sed tortor ultricies hendrerit. In hac habitasse platea dictumst.
      Pellentesque eget suscipit mi. Cras aliquam nulla vitae blandit dapibus.
      Sed ornare elit viverra nisl aliquet pretium.
      <ManageContactsButton>View All Contacts</ManageContactsButton>
    </StyledSideBar>
  )
}

const DashboardView = () => {
  return (
    <Layout>
      <SearchBar headerText="Discover Jobs and Make Connections" />
      <MainContentFlexContainer>
        <StyledDashboardBody>
          <DashboardSideBar />
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
