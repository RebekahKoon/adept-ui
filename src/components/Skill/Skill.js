import styled from 'styled-components'
import { useMutation } from '@apollo/client'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import { DELETE_SKILL_FROM_USER } from '../../queries/deleteSkillFromUser'
import { GET_USER_BY_ID } from '../../queries/getUserById'

const SkillContainer = styled.span`
  display: inline-block;
  margin: 0 auto;
  max-width: 100%;
  margin: 0rem 0.5rem 0.5rem 0rem;
  font-size: 0.9rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #575757;
  padding: 0.5rem 0.5rem 0.5rem 0.8rem;
  background: var(--lightBlue);
  border-radius: 1rem;
`

const SkillButton = styled.button`
  line-height: 1rem;
  background: none;
  border: none;
  padding: none;
  justify-content: center;

  .fa-times {
    padding-left: 2px;
    color: #767676;
    :hover {
      color: var(--darkPurple);
    }
  }
`

const Skill = ({ name, skillId, setUserSkills, userId }) => {
  const [deleteSkillFromUser, { loading, error }] = useMutation(
    DELETE_SKILL_FROM_USER,
    {
      onCompleted({ deleteSkillFromUser }) {
        console.log(deleteSkillFromUser)
        setUserSkills(deleteSkillFromUser.skills)
      },
      onError(e) {
        console.log(e)
      },
      refetchQueries: [
        {
          query: GET_USER_BY_ID,
          variables: { userId: userId },
        },
      ],
      awaitRefetchQueries: true,
    }
  )

  const handleDeleteSkillFromUser = (userId, skillId) => {
    deleteSkillFromUser({ variables: { userId: userId, skillId: skillId } })
  }

  return (
    <SkillContainer>
      {name}{' '}
      <SkillButton onClick={() => handleDeleteSkillFromUser(userId, skillId)}>
        <i className="fas fa-times"></i>
      </SkillButton>
    </SkillContainer>
  )
}

export default Skill
