import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import { JobPostSkill } from '../Skill'
import months from '../../utils/months'
import {
  StyledJobCardContainer,
  StyledJobCardContent,
  StyledJobCardGrid,
  StyledGridItem,
  StyledJobCardTop,
  StyledJobCardBottom,
  StyledJobCardText,
  StyledTitleLine,
  StyledViewJob,
  StyledSkills,
  StyledDate,
} from './JobCardStyle'

const JobMainContent = ({ jobPosting }) => {
  return (
    <StyledJobCardTop>
      <i className="fab fa-asymmetrik fa-3x"></i>
      <StyledJobCardText>
        <StyledTitleLine>
          <h3>{jobPosting.positionTitle}</h3>
          <StyledViewJob>
            View Job <i className="fas fa-arrow-circle-right"></i>
          </StyledViewJob>
        </StyledTitleLine>
        <StyledJobCardGrid>
          <StyledGridItem>
            <i className="fas fa-briefcase"></i> {jobPosting.company}
          </StyledGridItem>
          <StyledGridItem>
            <i className="fas fa-map-marker-alt"></i> {jobPosting.city},{' '}
            {jobPosting.state}
          </StyledGridItem>
          <StyledGridItem>
            <i className="fas fa-clock"></i>{' '}
            {jobPosting.type === 'FULL_TIME'
              ? 'Full-time'
              : jobPosting.type === 'PART_TIME'
              ? 'Part-time'
              : 'Internship'}
          </StyledGridItem>
          <StyledGridItem>
            <i className="fas fa-dollar-sign"></i> {jobPosting.salary}
          </StyledGridItem>
        </StyledJobCardGrid>
      </StyledJobCardText>
    </StyledJobCardTop>
  )
}

const JobSkills = ({ skills }) => {
  return (
    <StyledJobCardBottom>
      <StyledSkills>
        {skills.map((skill) => (
          <JobPostSkill name={skill.name} key={skill.skillId} />
        ))}
      </StyledSkills>
    </StyledJobCardBottom>
  )
}

const JobPostCard = ({ jobPosting }) => {
  const dateApplied = new Date(parseInt(jobPosting.datePosted))

  return (
    <StyledJobCardContainer>
      <StyledJobCardContent>
        <JobMainContent jobPosting={jobPosting} />
        <JobSkills skills={jobPosting.skillsRequired} />
        <StyledDate>
          <small>
            Posted {months[dateApplied.getMonth()]} {dateApplied.getDate()},{' '}
            {dateApplied.getFullYear()}
          </small>
        </StyledDate>
      </StyledJobCardContent>
    </StyledJobCardContainer>
  )
}

export default JobPostCard
