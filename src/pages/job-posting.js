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
} from '../styles/JobPostingStyle'

const handleClick = (e) => {
  e.preventDefault()
  Router.push('/search-results')
}
const JobPostingView = (props) => (
  <Layout>
    <SearchBar />
    <MainContentFlexContainer>
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
                  Company Name
                </JobPostingBodyHeaderCompany>
                <JobPostingBodyHeaderPosition>
                  A Very Long Remote Position Job Title Taking Up Space
                </JobPostingBodyHeaderPosition>
                <JobPostingBodyHeaderInfo>
                  <JobPostingInfoText>
                    <i className="fas fa-suitcase"></i>
                    <p>Text</p>
                  </JobPostingInfoText>
                  <JobPostingInfoText>
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Text</p>
                  </JobPostingInfoText>

                  <JobPostingInfoText>
                    <i className="fas fa-clock"></i>
                    <p>Text</p>
                  </JobPostingInfoText>

                  <JobPostingInfoText>
                    <i className="fas fa-dollar-sign"></i>
                    <p>Text</p>
                  </JobPostingInfoText>
                </JobPostingBodyHeaderInfo>
                <JobPostingBodyHeaderDate>
                  Posted on April18th, 2021
                </JobPostingBodyHeaderDate>
              </JobPostingBodyHeaderInfoContainer>
            </JobPostingBodyHeader>
            <JobPostingBodyResult>
              <JobPostingBodyResultDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </JobPostingBodyResultDescription>
            </JobPostingBodyResult>
          </JobPostingBodyMainContentContainer>
        </JobPostingBodyMain>
      </JobPostingBody>
    </MainContentFlexContainer>
  </Layout>
)

export default JobPostingView
