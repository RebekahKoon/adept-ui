import React from 'react'
import Router from 'next/router'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import SSRSearchResultDiv from './SearchResultStyle'
import {
  SSRSearchResultFooter,
  SSRSkillDiv,
  SSRSearchResultContainer,
  SSRSearchResultLinkContainer,
  SSRSearchResultContent,
  SSRJobInfoAndLogo,
  SSRJobButton,
  SSRMainContent,
  SSRJobLogoContainer,
  SSRJobTitleContainer,
  SSRJobInfoContainer,
  SSRCompanyContainer,
  SSRCompanyTextContainer,
  SSRCompanyText,
  SSRSkillsContainer,
  SSRDate,
} from './SearchResultStyle'

function SearchResult(props) {
  const handleClick = (e) => {
    e.preventDefault()
    Router.push('/job-posting')
  }

  return (
    <SSRSearchResultDiv>
      <SSRSearchResultContainer>
        <SSRSearchResultContent>
          <SSRJobInfoAndLogo>
            <SSRJobLogoContainer>
              <i className="fab fa-adn"></i>
            </SSRJobLogoContainer>
            <SSRMainContent>
              <SSRJobTitleContainer>Job Title</SSRJobTitleContainer>
              <SSRJobInfoContainer>
                <SSRCompanyContainer>
                  <SSRCompanyTextContainer>
                    <SSRCompanyText>
                      <i className="fas fa-suitcase"></i>
                      <p>Text</p>
                    </SSRCompanyText>
                    <SSRCompanyText>
                      <i className="fas fa-map-marker-alt"></i>
                      <p>Text</p>
                    </SSRCompanyText>

                    <SSRCompanyText>
                      <i className="fas fa-clock"></i>
                      <p>Text</p>
                    </SSRCompanyText>

                    <SSRCompanyText>
                      <i className="fas fa-dollar-sign"></i>
                      <p>Text</p>
                    </SSRCompanyText>
                  </SSRCompanyTextContainer>
                </SSRCompanyContainer>
              </SSRJobInfoContainer>
            </SSRMainContent>
          </SSRJobInfoAndLogo>
        </SSRSearchResultContent>
        <SSRSearchResultLinkContainer>
          <SSRJobButton value="View Job" label="ViewJob" onClick={handleClick}>
            View Job
            <i className="fas fa-arrow-right"></i>
          </SSRJobButton>
        </SSRSearchResultLinkContainer>
      </SSRSearchResultContainer>
      <SSRSearchResultFooter>
        <SSRSkillsContainer>
          <SSRSkillDiv>Skill</SSRSkillDiv>
          <SSRSkillDiv>Skill</SSRSkillDiv>
          <SSRSkillDiv>Skill</SSRSkillDiv>
        </SSRSkillsContainer>
        <SSRDate>Apr 20, 2021</SSRDate>
      </SSRSearchResultFooter>
    </SSRSearchResultDiv>
  )
}
export default SearchResult
