import React from 'react'
import Layout from '../components/Layout'
import MainContentContainer from '../components/styles/MainContentContainer'
import SearchBar from '../components/SearchBar'
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
      <MainContentContainer>
        <SearchBar headerText={headerText} />
        <StyledDashboardBody>
          <StyledSideBar>
            UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU UwU
            UwU UwU UwU UwU
          </StyledSideBar>
          <StyledResume>
            <Education />
          </StyledResume>
        </StyledDashboardBody>
      </MainContentContainer>
    </Layout>
  )
}

export default DashboardView
