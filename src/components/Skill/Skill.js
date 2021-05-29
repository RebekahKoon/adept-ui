import Loader from 'react-loader-spinner'
import { useMutation } from '@apollo/client'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import { DELETE_SKILL_FROM_USER } from '../../queries/deleteSkillFromUser'
import { GET_USER_BY_ID } from '../../queries/getUserById'
import { SkillContainer, SkillButton } from './SkillStyle'

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
      {loading ? (
        <div style={{ float: 'right', padding: '0rem .5rem' }}>
          <Loader type="TailSpin" color="#570EF1" height={10} width={10} />
        </div>
      ) : (
        <SkillButton onClick={() => handleDeleteSkillFromUser(userId, skillId)}>
          <i className="fas fa-times"></i>
        </SkillButton>
      )}
    </SkillContainer>
  )
}

export default Skill
