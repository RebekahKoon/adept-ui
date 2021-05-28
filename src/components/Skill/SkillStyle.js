import styled from 'styled-components'

export const SkillContainer = styled.span`
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
  :hover {
    cursor: default;
  }
`

export const StyledJobPostSkill = styled.span`
  display: inline-block;
  margin: 0 auto;
  max-width: 100%;
  margin: 0rem 0.5rem 0.5rem 0rem;
  font-size: 0.9rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #575757;
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  background: var(--lightBlue);
  border-radius: 1rem;
`

export const SkillButton = styled.button`
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
  :hover {
    cursor: pointer;
  }
`
