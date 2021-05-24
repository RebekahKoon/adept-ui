// pages/job-posting.js
import Router from 'next/router'

import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import MainContentFlexContainer from '../components/styles/MainContentFlexContainer'
import JobPostingNavContainer from '../styles/JobPostingStyle'
import useUser from '../lib/useUser'
import client from '../apollo/apolloClient'
import { SEARCH_JOBS } from '../queries/search'
import { GET_ALL_JOBS } from '../queries/getAllJobPostings'
import {
  JobPostingNavContent,
  JobPostingReturn,
  JobPostingReturnText,
  JobPostingReturnArrow,
  JobPostingBody,
  JobPostingBodyMain,
  JobPostingBodyMainContentContainer,
  JobPostingBodyHeader,
  JobPostingBodyHeaderLogo,
  JobPostingBodyHeaderInfoContainer,
  JobPostingBodyHeaderDate,
  JobPostingBodyHeaderInfo,
  JobPostingInfoText,
  JobPostingBodyHeaderPosition,
  JobPostingBodyHeaderCompany,
  JobPostingBodyResult,
  JobPostingBodyResultDescription,
  JobPostingBodyResultSkillsSection,
  JobPostingBodyResultSkillsHeader,
  JobPostingBodyResultSkillsContainer,
  JobPostingBodyResultSkillDiv,
  JobPostingApply,
} from '../styles/JobPostingStyle'

function JobPostingView(props) {
  const handleClick = (e) => {
    e.preventDefault()
    var page = Math.floor(props.id / 5) + 1
    if (props.q) {
      Router.push('/search-results?page=' + page + '&q=' + props.q)
    } else {
      Router.push('/search-results?page=' + page)
    }
  }
  const data = props.data[props.id]

  const userId = 'f0e24414-6df7-45e8-b245-691e65dec14b'

  // Redirect to dashboard after user logs in
  const { user, mutateUser } = useUser({})

  const dataArr = data.skillsRequired

  const date = new Date(data.datePosted)

  console.log('user:', user?.userId)

  const applyJob = (e) => {
    e.preventDefault()
    console.log('Applied!')
  }

  const createSkillDivs = () =>
    dataArr.map((data, index) => (
      <JobPostingBodyResultSkillDiv>
        {dataArr[index].name}
      </JobPostingBodyResultSkillDiv>
    ))

  console.log(data)
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  return (
    <Layout>
      <SearchBar />
      <MainContentFlexContainer>
        <div>
          <JobPostingNavContainer>
            <JobPostingNavContent>
              <JobPostingReturn onClick={handleClick}>
                <JobPostingReturnArrow>
                  <i className="fas fa-arrow-left"></i>
                </JobPostingReturnArrow>
                <JobPostingReturnText>Search Results</JobPostingReturnText>
              </JobPostingReturn>
            </JobPostingNavContent>
          </JobPostingNavContainer>
          <JobPostingBody>
            <JobPostingBodyMain>
              <JobPostingBodyMainContentContainer>
                <JobPostingBodyHeader>
                  <JobPostingBodyHeaderLogo>
                    <i className="fab fa-adn"></i>
                  </JobPostingBodyHeaderLogo>
                  <JobPostingBodyHeaderInfoContainer>
                    <JobPostingBodyHeaderCompany>
                      {data.company}
                    </JobPostingBodyHeaderCompany>
                    <JobPostingBodyHeaderPosition>
                      {data.positionTitle}
                    </JobPostingBodyHeaderPosition>
                    <JobPostingBodyHeaderInfo>
                      <JobPostingInfoText>
                        <i className="fas fa-map-marker-alt"></i>
                        <p>{data.city + ', ' + data.state}</p>
                      </JobPostingInfoText>

                      <JobPostingInfoText>
                        <i className="fas fa-clock"></i>
                        <p>{data.type}</p>
                      </JobPostingInfoText>

                      <JobPostingInfoText>
                        <i className="fas fa-dollar-sign"></i>
                        <p>{data.salary}</p>
                      </JobPostingInfoText>
                    </JobPostingBodyHeaderInfo>
                    <JobPostingBodyHeaderDate>
                      {'Posted on ' +
                        months[date.getMonth() + 1] +
                        ' ' +
                        date.getDate() +
                        ', ' +
                        date.getFullYear()}
                    </JobPostingBodyHeaderDate>
                  </JobPostingBodyHeaderInfoContainer>
                </JobPostingBodyHeader>
                <JobPostingBodyResult>
                  <JobPostingBodyResultDescription>
                    {data.description}
                  </JobPostingBodyResultDescription>
                  <JobPostingBodyResultSkillsSection>
                    <JobPostingBodyResultSkillsHeader>
                      Desired Skills
                    </JobPostingBodyResultSkillsHeader>
                    <JobPostingBodyResultSkillsContainer>
                      {createSkillDivs()}
                    </JobPostingBodyResultSkillsContainer>
                  </JobPostingBodyResultSkillsSection>
                  <JobPostingApply onClick={applyJob}>Apply</JobPostingApply>
                </JobPostingBodyResult>
              </JobPostingBodyMainContentContainer>
            </JobPostingBodyMain>
          </JobPostingBody>
        </div>
      </MainContentFlexContainer>
    </Layout>
  )
}

export default JobPostingView

export const getServerSideProps = async (context) => {
  if (context.query.q) {
    const data = await client.query({
      query: SEARCH_JOBS,
      variables: { searchTerm: context.query.q },
    })
    return {
      props: {
        data: data.data.searchJobPostings,
        id: context.query.id,
        q: context.query.q,
      },
    }
  } else {
    const { data: allJobData } = await client.query({
      query: GET_ALL_JOBS,
    })
    return {
      props: {
        data: allJobData.getAllJobPostings,
        id: context.query.id,
      },
    }
  }
}
