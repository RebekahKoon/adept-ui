import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import { SkillContainer, SkillButton } from './SkillStyle'

const RequiredSkill = ({ name, handleRemove }) => {
  return (
    <SkillContainer>
      {name}{' '}
      <SkillButton
        onClick={(e) => {
          e.preventDefault()
          handleRemove(name)
        }}
      >
        <i className="fas fa-times"></i>
      </SkillButton>
    </SkillContainer>
  )
}

export default RequiredSkill
