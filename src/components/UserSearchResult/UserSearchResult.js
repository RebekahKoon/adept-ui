import React from 'react'
import Router from 'next/router'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import SSRSearchResultDiv from './UserSearchResultStyle'
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
} from './UserSearchResultStyle'

function UserSearchResult(props) {
  console.log(props.data)
  const dataArr = props.data.skills
  console.log(dataArr)
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

  function createWorkExperience() {
    if (props.data.resume.workExperience[0]) {
      return (
        <SSRCompanyTextDiv className="company">
          <SSRCompanyText>
            <i className="fas fa-suitcase"></i>
            <p>{props.data.resume.workExperience[0].company}</p>
            <p className="tooltiptext">
              {props.data.resume.workExperience[0].company}
            </p>
          </SSRCompanyText>
        </SSRCompanyTextDiv>
      )
    } else {
      return (
        <SSRCompanyTextDiv className="company">
          <SSRCompanyText>
            <i className="fas fa-suitcase"></i>
            <p>Unemployed</p>
            <p className="tooltiptext">Unemployed</p>
          </SSRCompanyText>
        </SSRCompanyTextDiv>
      )
    }
  }

  const handleType = () => {
    if (props.data.type == 'EMPLOYER') {
      return (
        <SSRCompanyTextDiv className="type">
          <SSRCompanyText>
            <i className="fas fa-user"></i>
            <p>Employer</p>
            <p className="tooltiptext">Employer</p>
          </SSRCompanyText>
        </SSRCompanyTextDiv>
      )
    } else if (props.data.type == 'EMPLOYEE') {
      return (
        <SSRCompanyTextDiv className="type">
          <SSRCompanyText>
            <i className="fas fa-user"></i>
            <p>Employee</p>
            <p className="tooltiptext">Employee</p>
          </SSRCompanyText>
        </SSRCompanyTextDiv>
      )
    }
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
              <SSRJobTitleContainer>
                {props.data.positionTitle}
              </SSRJobTitleContainer>
              <SSRJobInfoContainer>
                <SSRCompanyContainer>
                  <SSRCompanyTextContainer>
                    {createWorkExperience()}
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
                        <i className="fas fa-envelope"></i>
                        <p>{props.data.email}</p>
                        <p className="tooltiptext">{props.data.email}</p>
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
      </SSRSearchResultFooter>
    </SSRSearchResultDiv>
  )
}
export default UserSearchResult
