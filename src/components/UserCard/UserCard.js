import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'
import { JobPostSkill } from '../Skill'
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
} from '../JobCard/JobCardStyle'

const StyledUserGrid = styled(StyledJobCardGrid)`
  .fa-user {
    margin-right: 0.4rem;
  }

  .fa-envelope {
    margin-right: 0.4rem;
  }
`

const UserButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1rem;
  color: var(--darkPurple);

  :hover {
    cursor: pointer;
    color: var(--darkerPurple);
  }

  .fa-plus {
    margin-left: 0.5rem;
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
                  <UserButton
                    value="View Job"
                    label="ViewJob"
                    onClick={handleClick}
                  >
                    Add Contact
                    <i className="fas fa-plus"></i>
                  </UserButton>
                )}
              </StyledViewJob>
            </StyledTitleLine>
            <StyledUserGrid>
              <StyledGridItem>
                <i className="fas fa-briefcase"></i>{' '}
                {props.data.resume.workExperience[0]
                  ? props.data.resume.workExperience[0].company
                  : 'Unemployed'}
              </StyledGridItem>
              <StyledGridItem>
                <i className="fas fa-map-marker-alt"></i>
                {props.data.city ? props.data.city : ''}
                {props.data.state && props.data.city
                  ? `, ${props.data.state}`
                  : props.data.state && !props.data.city
                  ? `${props.data.state}`
                  : 'Location unknown'}
              </StyledGridItem>
              <StyledGridItem>
                <i className="fas fa-user"></i>{' '}
                {props.data.type === 'EMPLOYER' ? 'Employer' : 'Employee'}
              </StyledGridItem>
              <StyledGridItem>
                <i className="fas fa-envelope"></i> {props.data.email}
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
