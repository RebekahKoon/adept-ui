import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import { JobPostSkill } from '../Skill'
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

const JobCard = () => {
  return (
    <StyledJobCardContainer>
      <StyledJobCardContent>
        <StyledJobCardTop>
          <i className="fab fa-asymmetrik fa-3x"></i>
          <StyledJobCardText>
            <StyledTitleLine>
              <h3>Sales Person</h3>
              <StyledViewJob>
                View Job <i className="fas fa-arrow-circle-right"></i>
              </StyledViewJob>
            </StyledTitleLine>
            <StyledJobCardGrid>
              <StyledGridItem>
                <i className="fas fa-briefcase"></i> Dunder Mifflin
              </StyledGridItem>
              <StyledGridItem>
                <i className="fas fa-map-marker-alt"></i> Scranton, PA
              </StyledGridItem>
              <StyledGridItem>
                <i className="fas fa-clock"></i> Full-time
              </StyledGridItem>
              <StyledGridItem>
                <i className="fas fa-dollar-sign"></i> 69420
              </StyledGridItem>
            </StyledJobCardGrid>
          </StyledJobCardText>
        </StyledJobCardTop>
        <StyledJobCardBottom>
          <StyledSkills>
            <JobPostSkill name="Communication" />
            <JobPostSkill name="Communication" />
            <JobPostSkill name="Communication" />
            {/* <JobPostSkill name="Communication" />
            <JobPostSkill name="Communication" />
            <JobPostSkill name="Communication" />
            <JobPostSkill name="Communication" />
            <JobPostSkill name="Communication" />
            <JobPostSkill name="Communication" />
            <JobPostSkill name="Communication" />
            <JobPostSkill name="Communication" /> */}
          </StyledSkills>
        </StyledJobCardBottom>
        <StyledDate>
          <small>Applied Apr 20, 2021</small>
        </StyledDate>
      </StyledJobCardContent>
    </StyledJobCardContainer>
  )
}

export default JobCard
