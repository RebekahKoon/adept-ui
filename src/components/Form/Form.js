import Loader from 'react-loader-spinner'
import {
  FormContainer,
  FormGrid,
  StyledButtonContainer,
  StyledSubmitButton,
  StyledCancelButton,
} from './FormStyle'

const Form = ({ children, loading, handleButtonClick }) => {
  return (
    <>
      <FormContainer>
        <FormGrid>{children}</FormGrid>
        <StyledButtonContainer>
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
