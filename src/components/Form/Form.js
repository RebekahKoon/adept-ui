import { useState } from 'react'
import { FormContainer, FormGrid, StyledAddToResumeButton } from './FormStyle'

const Form = ({ inputFields, buttonText }) => {
  const [formIsDisplayed, setFormIsDisplayed] = useState(false)
  const handleAddSchool = () => {
    console.log('hi')
    setFormIsDisplayed(true)
    console.log(formIsDisplayed)
  }

  return (
    <>
      <StyledAddToResumeButton
        onClick={handleAddSchool}
        style={{ display: formIsDisplayed ? 'none' : 'flex' }}
      >
        {buttonText}
      </StyledAddToResumeButton>
      <FormContainer style={{ display: formIsDisplayed ? 'flex' : 'none' }}>
        <FormGrid>{inputFields}</FormGrid>
        <button>Cancel</button>
        <button>Submit</button>
      </FormContainer>
    </>
  )
}

export default Form
