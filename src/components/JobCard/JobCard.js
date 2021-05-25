import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import { JobPostSkill } from '../Skill'
import {
  StyledJobCardContainer,
  StyledJobCardContent,
  StyledJobCardGrid,
  StyledJobCardTop,
  StyledJobCardBottom,
  StyledJobCardText,
  StyledTitleLine,
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
              <h3>Software Engineer</h3>
              <section style={{ textAlign: 'right' }}>
                View Job <i className="fas fa-arrow-circle-right"></i>
              </section>
            </StyledTitleLine>
            <StyledJobCardGrid>
              <div>
                <i className="fas fa-briefcase"></i> Nintendo
              </div>
              <div>
                <i className="fas fa-map-marker-alt"></i> Bellvue, WA
              </div>
              <div>
                <i className="fas fa-clock"></i> Full-time
              </div>
              <div>
                <i className="fas fa-dollar-sign"></i> 10000000
              </div>
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
          <small>Apr 20, 2021</small>
        </StyledDate>
      </StyledJobCardContent>
    </StyledJobCardContainer>
  )
}

export default JobCard
