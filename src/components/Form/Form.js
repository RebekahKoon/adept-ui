import { useState } from 'react'
import {
  FormContainer,
  FormGrid,
  StyledAddToResumeButton,
  StyledButtonContainer,
  StyledSubmitButton,
  StyledCancelButton,
  StyledFormTextarea,
} from './FormStyle'

const Form = ({ inputFields, buttonText }) => {
  const [formIsDisplayed, setFormIsDisplayed] = useState(false)
  const handleButtonClick = () => {
    formIsDisplayed === false
      ? setFormIsDisplayed(true)
      : setFormIsDisplayed(false)
  }

  return (
    <>
      <StyledAddToResumeButton
        onClick={handleButtonClick}
        style={{ display: formIsDisplayed ? 'none' : 'flex' }}
      >
        {buttonText}
      </StyledAddToResumeButton>
      <FormContainer style={{ display: formIsDisplayed ? 'flex' : 'none' }}>
        <FormGrid>{inputFields}</FormGrid>
        {/* <label for="description">Description</label>
        <StyledFormTextarea id="description" /> */}
        <StyledButtonContainer>
          <StyledCancelButton onClick={handleButtonClick}>
            Cancel
          </StyledCancelButton>
          <StyledSubmitButton>Submit</StyledSubmitButton>
        </StyledButtonContainer>
      </FormContainer>
    </>
  )
}

export default Form
