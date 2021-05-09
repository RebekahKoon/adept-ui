import {
  StyledResumeContainer,
  StyledResumeItem,
  StyledAddToResumeButton,
} from './ResumeStyle'

const Resume = () => {
  return (
    <>
      <StyledResumeContainer>
        <StyledResumeItem>
          <h1>Resume</h1>
        </StyledResumeItem>
        <StyledAddToResumeButton>Add to Resume</StyledAddToResumeButton>
      </StyledResumeContainer>
      <StyledResumeContainer>
        <StyledResumeItem>
          <h1>Resume</h1>
        </StyledResumeItem>
        <StyledAddToResumeButton>Add to Resume</StyledAddToResumeButton>
      </StyledResumeContainer>
    </>
  )
}

export default Resume
