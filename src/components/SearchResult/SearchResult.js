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
  SSRCompanyTextDiv,
  SSRCompanyText,
  SSRSkillsContainer,
  SSRDate,
} from './SearchResultStyle'

function SearchResult(props) {
  const dataArr = props.data.skillsRequired
  const handleClick = (e) => {
    e.preventDefault()
    var currPage = props.currPage - 1
    var id = currPage * 12 + props.id
    const jid = '0d8f2554-d0a3-4f1a-a5ba-caed21b9eb1a'
    if (props.q) {
      // Router.push('/job-posting?q=' + props.q + '&id=' + id)
      Router.push(`/job-posting?id=${jid}`)
    } else {
      Router.push(`/job-posting?id=${jid}`)
    }
  }

  const createSkillDivs = () =>
    dataArr.map((data, index) => {
      while (index <= 4) {
        return <SSRSkillDiv> {dataArr[index].name} </SSRSkillDiv>
      }
    })

  const handleType = () => {
    if (props.data.type == 'PART_TIME') {
      return (
        <SSRCompanyTextDiv className="type">
          <SSRCompanyText>
            <i className="fas fa-clock"></i>
            <p>Part Time</p>
            <p className="tooltiptext">Part Time</p>
          </SSRCompanyText>
        </SSRCompanyTextDiv>
      )
    } else if (props.data.type == 'INTERNSHIP') {
      return (
        <SSRCompanyTextDiv className="type">
          <SSRCompanyText>
            <i className="fas fa-clock"></i>
            <p>Internship</p>
            <p className="tooltiptext">Internship</p>
          </SSRCompanyText>
        </SSRCompanyTextDiv>
      )
    } else if (props.data.type == 'FULL_TIME') {
      return (
        <SSRCompanyTextDiv className="type">
          <SSRCompanyText>
            <i className="fas fa-clock"></i>
            <p>Full Time</p>
            <p className="tooltiptext">Full Time</p>
          </SSRCompanyText>
        </SSRCompanyTextDiv>
      )
    } else {
      console.log('Oopsie')
    }
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
                    <SSRCompanyTextDiv className="company">
                      <SSRCompanyText>
                        <i className="fas fa-suitcase"></i>
                        <p>{props.data.company}</p>
                        <p className="tooltiptext">{props.data.company}</p>
                      </SSRCompanyText>
                    </SSRCompanyTextDiv>
                    <SSRCompanyTextDiv className="location">
                      <SSRCompanyText>
                        <i className="fas fa-map-marker-alt"></i>
                        <p>{props.data.city + ', ' + props.data.state}</p>
                        <p className="tooltiptext">
                          {props.data.city + ', ' + props.data.state}
                        </p>
                      </SSRCompanyText>
                    </SSRCompanyTextDiv>
                    {handleType()}
                    <SSRCompanyTextDiv className="salary">
                      <SSRCompanyText>
                        <i className="fas fa-dollar-sign"></i>
                        <p>{props.data.salary}</p>
                        <p className="tooltiptext">{props.data.salary}</p>
                      </SSRCompanyText>
                    </SSRCompanyTextDiv>
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
        <SSRSkillsContainer>{createSkillDivs()}</SSRSkillsContainer>
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
