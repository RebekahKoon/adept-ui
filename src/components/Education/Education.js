import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import {
  StyledEducationContainer,
  StyledEducationContent,
  StyledEducationGrid,
  StyledAddEducationButton,
  StyledEducation,
  StyledEducationText,
} from './EducationStyle'

const EducationData = ({ educationData }) => {
  return educationData.map((education) => (
    <StyledEducation>
      <i className="fas fa-graduation-cap fa-3x"></i>
      <StyledEducationText>
        <b>{education.name}</b>
        {education.degree}
        <small>
          {education.startDate} - {education.endDate}
        </small>
        <small>{education.major}</small>
        <small>{education.gpa.toFixed(1)}</small>
      </StyledEducationText>
    </StyledEducation>
  ))
}

const Education = ({ educationData }) => {
  return (
    <StyledEducationContainer>
      <StyledEducationContent>
        <h2>Education</h2>
        <StyledEducationGrid>
          <EducationData educationData={educationData} />
        </StyledEducationGrid>
      </StyledEducationContent>
      <StyledAddEducationButton>Add Education</StyledAddEducationButton>
    </StyledEducationContainer>
  )
}

export default Education
