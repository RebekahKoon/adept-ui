import '@fortawesome/fontawesome-free/js/fontawesome'
import {
  StyledEducationContainer,
  StyledEducationContent,
  StyledEducationGrid,
  StyledAddSchoolButton,
  StyledEducation,
  StyledEducationText,
} from './EducationStyle'

const Education = () => {
  return (
    <StyledEducationContainer>
      <StyledEducationContent>
        <h1>Education</h1>
        <StyledEducationGrid>
          <StyledEducation>
            <i className="fas fa-graduation-cap fa-3x"></i>
            <StyledEducationText>
              <b>University of Oregon</b>
              Bachelor of Science
              <small>2012-2016</small>
              <small>Educational Foundations</small>
              <small>4.0</small>
            </StyledEducationText>
          </StyledEducation>
          <StyledEducation>
            <i className="fas fa-graduation-cap fa-3x"></i>
            <StyledEducationText>
              <b>Oregon State University</b>
              Bachelor of Science
              <small>2019-2021</small>
              <small>Computer Science</small>
              <small>4.0</small>
            </StyledEducationText>
          </StyledEducation>
        </StyledEducationGrid>
      </StyledEducationContent>
      <StyledAddSchoolButton>Add School</StyledAddSchoolButton>
    </StyledEducationContainer>
  )
}

export default Education
