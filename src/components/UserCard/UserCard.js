import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import Link from 'next/link'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'
import { JobPostSkill } from '../Skill'
import months from '../../utils/months'
import { useMutation } from '@apollo/client'
import { ADD_CONTACT_TO_USER } from '../../queries/addContactToUser'
import useUser from '../../lib/useUser'
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
  StyledDate,
} from '../JobCard/JobCardStyle'

const userButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1rem;

  :hover {
    cursor: pointer;
    border: solid 1px var(--darkPurple);
    color: var(--darkPurple);
  }
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
  const { user } = useUser()
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
  }

  return (
    <StyledJobCardContainer>
      <StyledJobCardContent>
        <StyledJobCardTop>
          <i className="fab fa-asymmetrik fa-3x"></i>
          <StyledJobCardText>
            <StyledTitleLine>
              <h3>{props.data.name}</h3>
              <StyledViewJob>
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
                ) : (
                  <userButton
                    value="View Job"
                    label="ViewJob"
                    onClick={handleClick}
                  >
                    Add Contact
                    <i className="fas fa-plus"></i>
                  </userButton>
                )}
              </StyledViewJob>
            </StyledTitleLine>
            <StyledJobCardGrid>
              <StyledGridItem>
                <i className="fas fa-briefcase"></i>{' '}
                {props.data.resume.workExperience[0]
                  ? props.data.resume.workExperience[0].company
                  : 'Unemployed'}
              </StyledGridItem>
              <StyledGridItem>
                <i className="fas fa-map-marker-alt"></i> {props.data.city},{' '}
                {props.data.state}
              </StyledGridItem>
              <StyledGridItem>
                <i className="fas fa-user"></i>{' '}
                {props.data.type === 'EMPLOYER' ? 'Employer' : 'Employee'}
              </StyledGridItem>
              <StyledGridItem>
                <i className="fas fa-envelope"></i> {props.data.email}
              </StyledGridItem>
            </StyledJobCardGrid>
          </StyledJobCardText>
        </StyledJobCardTop>
        <JobSkills skills={skillsArr} />
      </StyledJobCardContent>
    </StyledJobCardContainer>
  )
}

export default UserCard
