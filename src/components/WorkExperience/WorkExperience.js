import '@fortawesome/fontawesome-free/js/fontawesome'
import {
  StyledWorkExperienceContainer,
  StyledWorkExperienceContent,
  StyledWorkExperience,
  StyledWorkExperienceText,
  StyledAddWorkExperienceButton,
} from './WorkExperienceStyle'

const WorkExperienceData = ({ workExperienceData }) => {
  return workExperienceData.map((workExperience) => (
    <StyledWorkExperience>
      <i className="fas fa-briefcase fa-3x"></i>
      <StyledWorkExperienceText>
        <b>{workExperience.company}</b>
        {workExperience.position}
        <small>
          {workExperience.startDate} -{' '}
          {workExperience.isCurrentPosition
            ? 'present'
            : workExperience.endDate}{' '}
          | {workExperience.city}, {workExperience.state}
        </small>
        {workExperience.description}
      </StyledWorkExperienceText>
    </StyledWorkExperience>
  ))
}

const WorkExperience = ({ workExperienceData }) => {
  return (
    <StyledWorkExperienceContainer>
      <StyledWorkExperienceContent>
        <h2>Work Experience</h2>
        <WorkExperienceData workExperienceData={workExperienceData} />
      </StyledWorkExperienceContent>
      <StyledAddWorkExperienceButton>
        Add Work Experience
      </StyledAddWorkExperienceButton>
    </StyledWorkExperienceContainer>
  )
}

export default WorkExperience
