import React from 'react'
import Layout from '../components/Layout'
import MainContentContainer from '../components/styles/MainContentContainer'
import DashboardContent from '../components/DashboardContent'

const DashboardView = () => {
  return (
    <Layout>
      <MainContentContainer>
        <DashboardContent></DashboardContent>
      </MainContentContainer>
    </Layout>
  )
}

export default DashboardView
