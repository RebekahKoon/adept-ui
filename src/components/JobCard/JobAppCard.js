import ReactTooltip from 'react-tooltip'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import Link from 'next/link'
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

const JobMainContent = ({ jobApplication }) => {
  return (
    <StyledJobCardTop>
      <i className="fab fa-asymmetrik fa-3x"></i>
      <StyledJobCardText>
        <StyledTitleLine
          data-tip
          data-for={jobApplication.jobPosting.positionTitle}
        >
          <h3>
            {jobApplication.jobPosting.positionTitle.length > 48 ? (
              <>{jobApplication.jobPosting.positionTitle.substring(0, 48)}...</>
            ) : (
              jobApplication.jobPosting.positionTitle
            )}
          </h3>
          {jobApplication.jobPosting.positionTitle.length > 48 && (
            <ReactTooltip
              id={jobApplication.jobPosting.positionTitle}
              place="top"
              effect="solid"
            >
              {jobApplication.jobPosting.positionTitle}
            </ReactTooltip>
          )}
          <StyledViewJob>
            <Link href={`/job-posting/${jobApplication.jobPosting.jobPostId}`}>
              <a>
                View Job <i className="fas fa-arrow-circle-right"></i>
              </a>
            </Link>
          </StyledViewJob>
        </StyledTitleLine>
        <StyledJobCardGrid>
          <StyledGridItem data-tip data-for={jobApplication.jobPosting.company}>
            <i className="fas fa-briefcase"></i>{' '}
            {jobApplication.jobPosting.company.length > 20 ? (
              <>{jobApplication.jobPosting.company.substring(0, 20)}...</>
            ) : (
              jobApplication.jobPosting.company
            )}
            {jobApplication.jobPosting.company.length > 20 && (
              <ReactTooltip
                id={jobApplication.jobPosting.company}
                place="bottom"
                effect="solid"
              >
                {jobApplication.jobPosting.company}
              </ReactTooltip>
            )}
          </StyledGridItem>
          <StyledGridItem>
            <i className="fas fa-map-marker-alt"></i>{' '}
            {jobApplication.jobPosting.city}, {jobApplication.jobPosting.state}
          </StyledGridItem>
          <StyledGridItem>
            <i className="fas fa-clock"></i>{' '}
            {jobApplication.jobPosting.type === 'FULL_TIME'
              ? 'Full-time'
              : jobApplication.jobPosting.type === 'PART_TIME'
              ? 'Part-time'
              : 'Internship'}
          </StyledGridItem>
          <StyledGridItem>
            <i className="fas fa-dollar-sign"></i>{' '}
            {jobApplication.jobPosting.salary}
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

const JobAppCard = ({ jobApplication }) => {
  const dateApplied = new Date(parseInt(jobApplication.dateApplied))

  return (
    <StyledJobCardContainer>
      <StyledJobCardContent>
        <JobMainContent jobApplication={jobApplication} />
        <JobSkills skills={jobApplication.jobPosting.skillsRequired} />
        <StyledDate>
          <small>
            Applied {months[dateApplied.getMonth()]} {dateApplied.getDate()},{' '}
            {dateApplied.getFullYear()}
          </small>
        </StyledDate>
      </StyledJobCardContent>
    </StyledJobCardContainer>
  )
}

export default JobAppCard
