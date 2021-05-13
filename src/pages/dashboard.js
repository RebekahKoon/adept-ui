import { useState } from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import Layout from '../components/Layout'
import MainContentFlexContainer from '../components/styles/MainContentFlexContainer'
import StyledSideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import Education from '../components/Education'
import WorkExperience from '../components/WorkExperience'
import Skill from '../components/Skill'
import Contact from '../components/Contact'
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

const DashboardButton = styled(StyledButtonSolid)`
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  width: 100%;
  :hover {
    background-color: #4510b7;
  }
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
  display: block;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const StyledSkillDropdownContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`

export const StyledSkillDropdown = {
  option: (provided) => ({
    ...provided,
    color: '#191C3C',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#EEF2FF',
    },
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: '5px',
    color: '#191C3C',
    boxShadow: 'none',
    border: '1px solid #D2D0C9',
    width: '12rem',
    marginRight: '.5rem',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#AEB7D0',
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: '#311C87',
    transition: 'all .25s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),
  menu: (base) => ({
    ...base,
    width: '12rem',
  }),
  container: (base) => ({
    ...base,
    flex: 1,
  }),
}

const sampleUserData = {
  data: {
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
      contacts: [
        {
          name: 'Devin Nguyen',
          email: 'nguyehu7@oregonstate.edu',
          city: 'San Antonio',
          state: 'TX',
        },
        {
          name: 'Nathan Shelby',
          email: 'shelbyn@oregonstate.edu',
          city: 'Seattle',
          state: 'WA',
        },
        {
          name: 'Ridley',
          email: 'riddles@doggo.com',
          city: 'Eugene',
          state: 'OR',
        },
      ],
    },
  },
}

const UserSkills = () => {
  return sampleUserData.data.getUserById.skills.map((skill) => (
    <Skill name={skill.name} />
  ))
}

const UserContacts = () => {
  return sampleUserData.data.getUserById.contacts.map((contact) => (
    <Contact
      name={contact.name}
      email={contact.email}
      city={contact.city}
      state={contact.state}
    />
  ))
}

const DashboardSideBar = () => {
  const dropdownSkills = sampleUserData.data.getUserById.skills.map(
    (skill) => ({
      name: skill.name,
      label: skill.name,
    })
  )

  const [option, setOption] = useState('All')
  const handleOptionChange = (e) => {
    setOption(e.value)
    console.log(e.value)
  }

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
      <StyledSkillDropdownContainer>
        <Select
          placeholder={'Select skill...'}
          onChange={handleOptionChange}
          options={dropdownSkills}
          styles={StyledSkillDropdown}
          indicatorSeparator={false}
          isSearchable={false}
        />
        <DashboardButton>Add</DashboardButton>
      </StyledSkillDropdownContainer>
      <hr></hr>
      <h2>Contacts</h2>
      <UserContacts />
      <DashboardButton>View All Contacts</DashboardButton>
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
              educationData={sampleUserData.data.getUserById.resume.education}
            />
            <WorkExperience
              workExperienceData={
                sampleUserData.data.getUserById.resume.workExperience
              }
            />
          </StyledResume>
        </StyledDashboardBody>
      </MainContentFlexContainer>
    </Layout>
  )
}

export default DashboardView
