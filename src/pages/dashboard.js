import styled from 'styled-components'
import Layout from '../components/Layout'
import MainContentFlexContainer from '../components/styles/MainContentFlexContainer'
import StyledSideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import Education from '../components/Education'
import WorkExperience from '../components/WorkExperience'
import Skill from '../components/Skill'
import { StyledButtonSolid } from '../components/Button'

export const StyledDashboardBody = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: var(--maxWidth);
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 2.5rem 0px 8rem;
`

export const StyledResume = styled.div`
  display: flex;
  margin: 0 auto;
  width: 68%;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  border-radius: 5px;
`

const ManageContactsButton = styled(StyledButtonSolid)`
  margin-top: 1rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  width: 100%;
`

const SideBarProfile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  line-height: 1.3rem;

  h2 {
    line-height: 0em;
  }

  .fa-user-circle {
    color: #585858;
  }
`

const StyledSkillList = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10px, 100%));
  grid-auto-columns: none;
  gap: 0.5rem 0.5rem;
  line-height: 1.25em; */
  display: block;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`

const sampleUserData = {
  getUserById: {
    resume: {
      education: [
        {
          name: 'University of Oregon',
          degree: 'Bachelor of Science',
          startDate: 2012,
          endDate: 2016,
          major: 'Educational Foundations',
          gpa: 4.0,
        },
        {
          name: 'Oregon State University',
          degree: 'Bachelor of Science',
          startDate: 2019,
          endDate: 2021,
          major: 'Computer Science',
          gpa: 4.0,
        },
      ],
      workExperience: [
        {
          company: 'Oregon State University',
          position: 'Teaching Assistant',
          startDate: 2019,
          endDate: 2021,
          isCurrentPosition: false,
          city: 'Corvallis',
          state: 'OR',
          description: 'Teaching assistant for computer science courses.',
        },
        {
          company: 'University of Oregon',
          position: 'IT Assistant',
          startDate: 2018,
          isCurrentPosition: true,
          city: 'Eugene',
          state: 'OR',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
            Suspendisse bibendum vel ligula id dapibus. Phasellus sed metus \
            sed massa ullamcorper lobortis. Phasellus dictum neque justo. \
            Sed vestibulum tellus vel maximus vehicula. Sed aliquam vitae nisi\
             non elementum. Interdum et malesuada fames ac ante ipsum primis in\
             faucibus. Fusce a lacinia urna, ac tincidunt magna. Nulla vel \
             tellus velit. Mauris eget iaculis ipsum. Pellentesque dapibus \
             nisi in ligula finibus malesuada.',
        },
      ],
    },
    skills: [
      {
        name: 'C',
      },
      {
        name: 'C++',
      },
      {
        name: 'CSS',
      },
      {
        name: 'HTML',
      },
      {
        name: 'JavaScript',
      },
      {
        name: 'Object-oriented programming',
      },
      {
        name: 'Python',
      },
      {
        name: 'React',
      },
      {
        name: 'SQL',
      },
      {
        name: 'Teamwork',
      },
      {
        name: 'Time management',
      },
    ],
  },
}

const UserSkills = () => {
  return sampleUserData.getUserById.skills.map((skill) => (
    <Skill name={skill.name} />
  ))
}

const DashboardSideBar = () => {
  return (
    <StyledSideBar>
      <SideBarProfile>
        <p>
          <i className="fas fa-user-circle fa-5x"></i>
        </p>
        <h2>Rebekah Koon</h2>
        <div>Oregon State University</div>
        <div>IT Assistant AKA Dishwasher</div>
        <div style={{ color: '#585858' }}>Eugene, OR</div>
      </SideBarProfile>
      <hr></hr>
      <h2>Skills</h2>
      <StyledSkillList>
        <UserSkills />
      </StyledSkillList>
      <hr></hr>
      <h2>Contacts</h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id justo
      felis. Proin tristique ligula ut odio faucibus tincidunt. Sed et lectus
      sed tortor ultricies hendrerit. In hac habitasse platea dictumst.
      Pellentesque eget suscipit mi. Cras aliquam nulla vitae blandit dapibus.
      Sed ornare elit viverra nisl aliquet pretium.
      <ManageContactsButton>View All Contacts</ManageContactsButton>
    </StyledSideBar>
  )
}

const DashboardView = () => {
  return (
    <Layout>
      <SearchBar headerText="Discover Jobs and Make Connections" />
      <MainContentFlexContainer>
        <StyledDashboardBody>
          <DashboardSideBar />
          <StyledResume>
            <Education
              educationData={sampleUserData.getUserById.resume.education}
            />
            <WorkExperience
              workExperienceData={
                sampleUserData.getUserById.resume.workExperience
              }
            />
          </StyledResume>
        </StyledDashboardBody>
      </MainContentFlexContainer>
    </Layout>
  )
}

export default DashboardView
