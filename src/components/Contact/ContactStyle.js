import styled from 'styled-components'
import {
  StyledEducationContent,
  StyledEducation,
  StyledEducationText,
} from '../Education/EducationStyle'

export const StyledContactContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  border-radius: 5px;
  margin-bottom: 2.5rem;
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
