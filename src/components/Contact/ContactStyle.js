import styled from 'styled-components'
import {
  StyledEducationContent,
  StyledEducation,
  StyledEducationText,
  StyledRemoveButton,
} from '../Education/EducationStyle'

export const StyledContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;

  :hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
`

export const StyledContactContent = styled(StyledEducationContent)`
  padding: 0;
`

export const StyledContact = styled(StyledEducation)`
  width: 100%;
  margin: auto;
  padding: 0px, auto;

  .fa-user-circle {
    color: #585858;
    display: inline-block;
    vertical-align: top;
    padding-right: 0.5rem;
  }
`

export const StyledContactText = styled(StyledEducationText)`
  /* width: 100%; */
`
export const StyledRemoveContactButton = styled(StyledRemoveButton)`
  float: right;
`

export default StyledContactContent
