import styled from 'styled-components'
import {
  StyledEducationContainer,
  StyledEducationContent,
  StyledEducation,
  StyledEducationText,
} from '../Education/EducationStyle'

export const StyledContactContainer = styled(StyledEducationContainer)`
  border: none;
  box-shadow: none;
`
export const StyledContactContent = styled(StyledEducationContent)`
  padding: 0;
`
export const StyledContact = styled(StyledEducation)`
  align-items: center;

  .fa-user-circle {
    color: #585858;
    display: inline-block;
    vertical-align: top;
    padding-right: 0.5rem;
  }
`
export const StyledContactText = styled(StyledEducationText)``

export default StyledContactContent
