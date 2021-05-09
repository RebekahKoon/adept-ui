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
  line-height: 1.8em;
  margin-bottom: 2.5rem;

  b {
    line-height: 1.2em;
  }

  .fa-briefcase {
    color: #585858;
    display: inline-block;
    vertical-align: top;
  }
`

export const StyledWorkExperienceText = styled(StyledEducationText)`
  margin-left: 1.3rem;
`

export const StyledAddWorkExperienceButton = styled(StyledAddEducationButton)``

export default StyledEducationContainer
