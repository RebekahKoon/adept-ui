import '@fortawesome/fontawesome-free/js/fontawesome'
import {
  StyledWorkExperienceContainer,
  StyledWorkExperienceContent,
  StyledWorkExperience,
  StyledWorkExperienceText,
  StyledAddWorkExperienceButton,
} from './WorkExperienceStyle'

const WorkExperience = () => {
  return (
    <StyledWorkExperienceContainer>
      <StyledWorkExperienceContent>
        <h1>Work Experience</h1>
        <StyledWorkExperience>
          <i class="fas fa-briefcase fa-3x"></i>
          <StyledWorkExperienceText>
            <b>Oregon State University</b>
            Teaching Assistant
            <small>2019-2021 | Corvallis, OR</small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum vel ligula id dapibus. Phasellus sed metus sed massa
            ullamcorper lobortis. Phasellus dictum neque justo. Sed vestibulum
            tellus vel maximus vehicula. Sed aliquam vitae nisi non elementum.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce
            a lacinia urna, ac tincidunt magna. Nulla vel tellus velit. Mauris
            eget iaculis ipsum. Pellentesque dapibus nisi in ligula finibus
            malesuada.
          </StyledWorkExperienceText>
        </StyledWorkExperience>
        <StyledWorkExperience>
          <i class="fas fa-briefcase fa-3x"></i>
          <StyledWorkExperienceText>
            <b>Oregon State University</b>
            Teaching Assistant
            <small>2019-2021 | Corvallis, OR</small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum vel ligula id dapibus. Phasellus sed metus sed massa
            ullamcorper lobortis. Phasellus dictum neque justo. Sed vestibulum
            tellus vel maximus vehicula. Sed aliquam vitae nisi non elementum.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce
            a lacinia urna, ac tincidunt magna. Nulla vel tellus velit. Mauris
            eget iaculis ipsum. Pellentesque dapibus nisi in ligula finibus
            malesuada.
          </StyledWorkExperienceText>
        </StyledWorkExperience>
      </StyledWorkExperienceContent>
      <StyledAddWorkExperienceButton>
        Add Work Experience
      </StyledAddWorkExperienceButton>
    </StyledWorkExperienceContainer>
  )
}

export default WorkExperience
