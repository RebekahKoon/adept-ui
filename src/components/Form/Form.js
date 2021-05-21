import { useState } from 'react'
import Loader from 'react-loader-spinner'
import {
  FormContainer,
  FormGrid,
  StyledAddToResumeButton,
  StyledButtonContainer,
  StyledSubmitButton,
  StyledCancelButton,
} from './FormStyle'

const Form = ({ children, buttonText, loading }) => {
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
          {/* <StyledCancelButton onClick={handleButtonClick}>
            Cancel
          </StyledCancelButton> */}
          {loading ? (
            <Loader type="TailSpin" color="#570EF1" height={26} width={26} />
          ) : (
            <>
              <StyledCancelButton onClick={handleButtonClick}>
                Cancel
              </StyledCancelButton>
              <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
            </>
          )}
        </StyledButtonContainer>
      </FormContainer>
    </>
  )
}

export default Form
