import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  FormContainer,
  FormGrid,
  StyledAddToResumeButton,
  StyledButtonContainer,
  StyledSubmitButton,
  StyledCancelButton,
} from './FormStyle'

const Form = ({ children, buttonText }) => {
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
        <FormGrid>{children}</FormGrid>
        <StyledButtonContainer>
          <StyledCancelButton onClick={handleButtonClick}>
            Cancel
          </StyledCancelButton>
          <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
        </StyledButtonContainer>
      </FormContainer>
    </>
  )
}

export default Form
