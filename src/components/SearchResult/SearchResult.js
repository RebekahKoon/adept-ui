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
  console.log(props.data)
  const handleClick = (e) => {
    e.preventDefault()
    Router.push('/job-posting?q=' + props.data.company + '&id=' + props.id)
  }
  const date = new Date(props.data.datePosted)
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
    <SSRSearchResultDiv>
      <SSRSearchResultContainer>
        <SSRSearchResultContent>
          <SSRJobInfoAndLogo>
            <SSRJobLogoContainer>
              <i className="fab fa-adn"></i>
            </SSRJobLogoContainer>
            <SSRMainContent>
              <SSRJobTitleContainer>
                {props.data.positionTitle}
              </SSRJobTitleContainer>
              <SSRJobInfoContainer>
                <SSRCompanyContainer>
                  <SSRCompanyTextContainer>
                    <SSRCompanyText>
                      <i className="fas fa-suitcase"></i>
                      <p>{props.data.company}</p>
                    </SSRCompanyText>
                    <SSRCompanyText>
                      <i className="fas fa-map-marker-alt"></i>
                      <p>{props.data.city}</p>
                    </SSRCompanyText>

                    <SSRCompanyText>
                      <i className="fas fa-clock"></i>
                      <p>{props.data.type}</p>
                    </SSRCompanyText>

                    <SSRCompanyText>
                      <i className="fas fa-dollar-sign"></i>
                      <p>{props.data.salary}</p>
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
          <SSRSkillDiv>{props.data.skillsRequired[0].name}</SSRSkillDiv>
        </SSRSkillsContainer>
        <SSRDate>
          {months[date.getMonth() + 1] +
            ' ' +
            date.getDate() +
            ', ' +
            date.getFullYear()}
        </SSRDate>
      </SSRSearchResultFooter>
    </SSRSearchResultDiv>
  )
}
export default SearchResult
