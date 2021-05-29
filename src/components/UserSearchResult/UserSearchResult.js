import React from 'react'
import Router from 'next/router'
import Loader from 'react-loader-spinner'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import { useMutation } from '@apollo/client'
import { ADD_CONTACT_TO_USER } from '../../queries/addContactToUser'
import useUser from '../../lib/useUser'
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
  const { user } = useUser()
  console.log(props.data)
  const dataArr = props.data.skills
  console.log(dataArr)

  const [
    addContactToUser,
    { loading: addSkillToUserLoading, error: addSkillToUserError },
  ] = useMutation(ADD_CONTACT_TO_USER, {
    onCompleted({ addContactToUser }) {
      console.log('User added')
    },
    onError(e) {
      console.log(e)
    },
  })

  const handleClick = () => {
    addContactToUser({
      variables: { userId: user.userId, contactId: props.data.userId },
    })
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
              <SSRJobTitleContainer>{props.data.name}</SSRJobTitleContainer>
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
          {addSkillToUserLoading ? (
            <div
              style={{
                display: 'flex',
                width: '25%',
                marginLeft: '5px',
                justifyContent: 'center',
              }}
            >
              <Loader type="TailSpin" color="#570EF1" height={32} width={32} />
            </div>
          ) : (
            <SSRJobButton
              value="View Job"
              label="ViewJob"
              onClick={handleClick}
            >
              Add Contact
              <i className="fas fa-plus"></i>
            </SSRJobButton>
          )}
        </SSRSearchResultLinkContainer>
      </SSRSearchResultContainer>
      <SSRSearchResultFooter>
        <SSRSkillsContainer>{createSkillDivs()}</SSRSkillsContainer>
      </SSRSearchResultFooter>
    </SSRSearchResultDiv>
  )
}
export default UserSearchResult
