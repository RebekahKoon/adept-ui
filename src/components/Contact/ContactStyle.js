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
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;

  :hover {
    /* background-color: var(--lightBlue); */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
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
