import { useState, useEffect } from 'react'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import ReactTooltip from 'react-tooltip'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'
import { JobPostSkill } from '../Skill'
import { useQuery, useMutation } from '@apollo/client'
import { GET_USER_CONTACTS_AND_SKILLS } from '../../queries/jobPosting'
import { ADD_CONTACT_TO_USER } from '../../queries/addContactToUser'
import useUser from '../../lib/useUser'
import { ButtonSolid } from '../../components/Button'
import {
  StyledJobCardContainer,
  StyledJobCardContent,
  StyledJobCardGrid,
  StyledGridItem,
  StyledJobCardTop,
  StyledJobCardBottom,
  StyledJobCardText,
  StyledTitleLine,
  StyledViewJob,
  StyledSkills,
} from '../JobCard/JobCardStyle'

const StyledUserGrid = styled(StyledJobCardGrid)`
  .fa-user {
    margin-right: 0.4rem;
  }

  .fa-envelope {
    margin-right: 0.4rem;
  }
`

const UserButton = styled(ButtonSolid)`
  border-radius: 1rem;
  font-size: 0.875rem;
`

const JobSkills = ({ skills }) => {
  return (
    <StyledJobCardBottom>
      <StyledSkills>
        {skills.map((skill) => (
          <JobPostSkill name={skill.name} key={skill.skillId} />
        ))}
      </StyledSkills>
    </StyledJobCardBottom>
  )
}

function UserCard(props) {
  const [isUser, setIsUser] = useState(false)
  const [contacts, setContacts] = useState()
  const [hasConnected, setHasConnected] = useState(false)
  const { user } = useUser()
  // const [userId, setUserId] = useState(user.userId)

  // const { data: userData } = useQuery(GET_USER_CONTACTS_AND_SKILLS, {
  //   variables: { userId: user.userId },
  //   onCompleted: (data) => {
  //     if (data) {
  //       setContacts(data.getUserById.contacts)
  //     }
  //   },
  //   onError: (error) => {
  //     console.log(error)
  //   },
  // })

  // useEffect(() => {
  //   setContacts(userData?.getUserById.contacts)
  //   setHasConnected(
  //     userData?.getUserById?.contacts.filter(
  //       (contact) => contact.userId === props.data.userId
  //     ).length !== 0
  //   )
  // }, [userData, user.userId, props.data.userId])
  // console.log(user)

  const skillsArr = props.data.skills
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

    setHasConnected(true)
  }

  return (
    <StyledJobCardContainer>
      <StyledJobCardContent>
        <StyledJobCardTop>
          <i className="fab fa-asymmetrik fa-3x"></i>
          <StyledJobCardText>
            <StyledTitleLine>
              <h3>{props.data.name}</h3>
              {/* <StyledViewJob>
                {addSkillToUserLoading ? (
                  <div
                    style={{
                      display: 'flex',
                      width: '25%',
                      marginLeft: '5px',
                      justifyContent: 'center',
                    }}
                  >
                    <Loader
                      type="TailSpin"
                      color="#570EF1"
                      height={32}
                      width={32}
                    />
                  </div>
                ) : props.data.userId !== user.userId ? (
                  <UserButton
                    disabled={addSkillToUserLoading || hasConnected}
                    value="View Job"
                    label="ViewJob"
                    onClick={handleClick}
                  >
                    {hasConnected ? 'Connected' : 'Connect'}
                  </UserButton>
                ) : (
                  ''
                )}
              </StyledViewJob> */}
            </StyledTitleLine>
            <StyledUserGrid>
              <StyledGridItem data-tip data-for={props.data.resume.resumeId}>
                <i className="fas fa-briefcase"></i>{' '}
                {props.data.resume.workExperience[0] &&
                props.data.resume.workExperience[0].company.length > 14 ? (
                  <>
                    {props.data.resume.workExperience[0].company.substring(
                      0,
                      14
                    )}
                    ...
                  </>
                ) : (
                  'Unemployed'
                )}
                {props.data.resume.workExperience[0] &&
                  props.data.resume.workExperience[0].company.length > 14 && (
                    <ReactTooltip
                      id={props.data.resume.resumeId}
                      place="bottom"
                      effect="solid"
                    >
                      {props.data.resume.workExperience[0]
                        ? props.data.resume.workExperience[0].company
                        : 'Unemployed'}
                    </ReactTooltip>
                  )}
              </StyledGridItem>
              <StyledGridItem data-tip data-for={props.data.userId}>
                <i className="fas fa-map-marker-alt"></i>
                {props.data.city ? props.data.city : ''}
                {props.data.state && props.data.city
                  ? `, ${props.data.state}`
                  : props.data.state && !props.data.city
                  ? `${props.data.state}`
                  : 'Location unknown'}
                {/* <ReactTooltip
                  id={props.data.userId}
                  place="bottom"
                  effect="solid"
                >
                  {props.data.city ? props.data.city : ''}
                  {props.data.state && props.data.city
                    ? `, ${props.data.state}`
                    : props.data.state && !props.data.city
                    ? `${props.data.state}`
                    : 'Location unknown'}
                </ReactTooltip> */}
              </StyledGridItem>
              <StyledGridItem>
                <i className="fas fa-user"></i>{' '}
                {props.data.type === 'EMPLOYER' ? 'Employer' : 'Employee'}
              </StyledGridItem>
              <StyledGridItem data-tip data-for={props.data.email}>
                <i className="fas fa-envelope"></i>{' '}
                {props.data.email.length > 11 ? (
                  <>{props.data.email.substring(0, 11)}...</>
                ) : (
                  props.data.email
                )}
                {props.data.email.length > 11 && (
                  <ReactTooltip
                    id={props.data.email}
                    place="bottom"
                    effect="solid"
                  >
                    {props.data.email}
                  </ReactTooltip>
                )}
              </StyledGridItem>
            </StyledUserGrid>
          </StyledJobCardText>
        </StyledJobCardTop>
        <JobSkills skills={skillsArr} />
      </StyledJobCardContent>
    </StyledJobCardContainer>
  )
}

export default UserCard
