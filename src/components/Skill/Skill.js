import styled from 'styled-components'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'

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

const Skill = ({ name }) => {
  return (
    <SkillContainer>
      {name}{' '}
      <SkillButton>
        <i className="fas fa-times"></i>
      </SkillButton>
    </SkillContainer>
  )
}

export default Skill
