import styled from 'styled-components'
import {
  StyledEducationContainer,
  StyledEducationContent,
  StyledEducation,
  StyledEducationText,
  StyledAddEducationButton,
} from '../Education/EducationStyle'

export const StyledWorkExperienceContainer = styled(StyledEducationContainer)``

export const StyledWorkExperienceContent = styled(StyledEducationContent)`
  padding-bottom: 0;
`

export const StyledWorkExperience = styled(StyledEducation)`
  width: 100%;
  line-height: 1.8em;
  margin: auto;
  margin-bottom: 2.5rem;
  padding: 0px, auto;

  b {
    line-height: 1.2em;
  }

  .fa-briefcase {
    color: #585858;
    display: inline-block;
    vertical-align: top;
  }

  .fa-times {
    color: var(--lightGray);
    :hover {
      color: var(--purple);
      cursor: pointer;
    }
  }
`

export const StyledWorkExperienceText = styled(StyledEducationText)`
  margin-left: 1.3rem;
  width: 100%;
`

export const StyledFormTextarea = styled.textarea`
  width: 41.875rem;
  max-width: 41.875rem;
  font-size: 0.875rem;
  border: 1px solid var(--lightGray);
  margin-bottom: 2.5rem;

  @media (max-width: 1100px) {
    max-width: 36rem;
  }

  @media (max-width: 1000px) {
    max-width: 22rem;
  }

  @media (max-width: 690px) {
    max-width: 100%;
  }
`

export const StyledLabel = styled.label`
  font-size: 0.875rem;
`

export const StyledRemoveButtonContainer = styled.div`
  left: 100%;
  transform: translate(-100%, 0);
  justify-content: right;
`

export const StyledRemoveButton = styled.button`
  border: none;
  background-color: var(--white);
`

export const StyledAddWorkExperienceButton = styled(StyledAddEducationButton)``

export default StyledEducationContainer
