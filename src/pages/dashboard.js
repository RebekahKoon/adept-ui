import styled from 'styled-components'
import Layout from '../components/Layout'
import MainContentFlexContainer from '../components/styles/MainContentFlexContainer'
import SearchBar from '../components/SearchBar'
import Education from '../components/Education'
import {
  StyledDashboardBody,
  StyledSideBar,
  StyledResume,
} from '../styles/DashboardStyle'

const DashboardView = () => {
  return (
    <Layout>
      <SearchBar headerText="Discover Jobs and Make Connections" />
      <MainContentFlexContainer>
        <StyledDashboardBody>
          <StyledSideBar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
            justo felis. Proin tristique ligula ut odio faucibus tincidunt. Sed
            et lectus sed tortor ultricies hendrerit. In hac habitasse platea
            dictumst. Pellentesque eget suscipit mi. Cras aliquam nulla vitae
            blandit dapibus. Sed ornare elit viverra nisl aliquet pretium.
          </StyledSideBar>
          <StyledResume>
            <Education />
          </StyledResume>
        </StyledDashboardBody>
      </MainContentFlexContainer>
    </Layout>
  )
}

export default DashboardView
