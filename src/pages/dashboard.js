import React from 'react'
import Layout from '../components/Layout'
import MainContentContainer from '../components/styles/MainContentContainer'
import SearchBar from '../components/SearchBar'
import Resume from '../components/Resume'
import Education from '../components/Education'
import {
  StyledDashboardBody,
  StyledSideBar,
  StyledResume,
} from '../styles/DashboardStyle'

const DashboardView = () => {
  const headerText = 'Discover Jobs and Make Connections'
  return (
    <Layout>
      <SearchBar headerText={headerText} />
      <MainContentContainer>
        <StyledDashboardBody>
          <StyledSideBar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
            justo felis. Proin tristique ligula ut odio faucibus tincidunt. Sed
            et lectus sed tortor ultricies hendrerit. In hac habitasse platea
            dictumst. Pellentesque eget suscipit mi. Cras aliquam nulla vitae
            blandit dapibus. Sed ornare elit viverra nisl aliquet pretium.
          </StyledSideBar>
          <StyledResume>
            <Resume />
          </StyledResume>
        </StyledDashboardBody>
      </MainContentContainer>
    </Layout>
  )
}

export default DashboardView
