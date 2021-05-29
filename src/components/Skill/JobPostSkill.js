import styled from 'styled-components'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import { StyledJobPostSkill } from './SkillStyle'

const Icon = styled.span`
  padding-left: 0.5rem;
`

const JobPostSkill = ({ name, hasSkill }) => {
  return (
    <StyledJobPostSkill>
      {name}
      {hasSkill && (
        <Icon>
          <i className="fas fa-check"></i>
        </Icon>
      )}
    </StyledJobPostSkill>
  )
}

export default JobPostSkill
