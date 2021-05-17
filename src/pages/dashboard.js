import { useState } from 'react'
import styled from 'styled-components'
import CreatableSelect from 'react-select/creatable'
import { useQuery, useLazyQuery } from '@apollo/client'
import { GET_ALL_SKILLS } from '../queries/getAllSkills'
import { GET_USER_BY_ID } from '../queries/getUserById'
import Select from 'react-select'
import client from '../apollo/apolloClient'
import Layout from '../components/Layout'
import MainContentFlexContainer from '../components/styles/MainContentFlexContainer'
import StyledSideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import Education from '../components/Education'
import WorkExperience from '../components/WorkExperience'
import Skill from '../components/Skill'
import Contact from '../components/Contact'
import ContactsModal from '../components/ContactsModal'
import ModalContext from '../context/ModalContext'
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

const UserSkills = ({ userSkills }) => {
  return userSkills.map((skill) => <Skill name={skill.name} />)
}

const UserContacts = ({ contacts }) => {
  return contacts
    ? contacts
        .slice(0, 3)
        .map((contact) => (
          <Contact
            name={contact.name}
            email={contact.email}
            city={contact.city}
            state={contact.state}
          />
        ))
    : null
}

const DashboardSideBar = ({ currentUser, allSkills }) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  const dropdownSkills = allSkills.map((skill) => ({
    name: skill.skillId,
    label: skill.name,
  }))

  const handleInputChange = (inputValue, actionMeta) => {
    console.log(inputValue)
    console.log(actionMeta.action)
  }

  return (
    <StyledSideBar>
      <SideBarProfile>
        <p>
          <i className="fas fa-user-circle fa-5x"></i>
        </p>
        <h2>{currentUser.name}</h2>
        <div>Oregon State University</div>
        <div>IT Assistant AKA Dishwasher</div>
        <div style={{ color: '#585858' }}>
          {currentUser.city
            ? `${currentUser.city}, `
            : 'Location not specified'}
          {currentUser.state ? currentUser.state : ''}
        </div>
      </SideBarProfile>
      <hr></hr>
      <h2>{currentUser.name.split(' ')[0]}'s Skills</h2>
      <StyledSkillList>
        <UserSkills userSkills={currentUser.skills} />
      </StyledSkillList>
      <StyledSkillDropdownContainer>
        <CreatableSelect
          placeholder={'Add skill...'}
          // onChange={handleOptionChange}
          // onCreateOption=
          isClearable
          options={dropdownSkills}
          styles={StyledSkillDropdown}
          onInputChange={handleInputChange}
          indicatorSeparator={false}
          isSearchable={false}
        />
        <DashboardButton>Add</DashboardButton>
      </StyledSkillDropdownContainer>
      <hr></hr>
      <h2>{currentUser.name.split(' ')[0]}'s Contacts</h2>
      <UserContacts contacts={currentUser.contacts} />
      <DashboardButton onClick={openModal}>View All Contacts</DashboardButton>
      <ModalContext.Provider
        value={{
          isOpen,
          closeModal,
        }}
      >
        <ContactsModal contacts={currentUser.contacts} numberContacts={420} />
      </ModalContext.Provider>
    </StyledSideBar>
  )
}

const Dashboard = (props) => {
  console.log(props.allSkills)
  console.log(props.currentUser)

  return (
    <Layout>
      <SearchBar headerText="Discover Jobs and Make Connections" />
      <MainContentFlexContainer>
        <StyledDashboardBody>
          <DashboardSideBar
            currentUser={props.currentUser}
            allSkills={props.allSkills}
          />
          <StyledResume>
            <Education educationData={props.currentUser.resume.education} />
            <WorkExperience
              workExperienceData={props.currentUser.resume.workExperience}
            />
          </StyledResume>
        </StyledDashboardBody>
      </MainContentFlexContainer>
    </Layout>
  )
}

export default Dashboard

export const getServerSideProps = async () => {
  const { data: skillsData } = await client.query({
    query: GET_ALL_SKILLS,
  })

  const { data: userData } = await client.query({
    query: GET_USER_BY_ID,
    variables: { userId: '10737552-9018-497d-8e7a-064f99e8eeaa' },
  })

  return {
    props: {
      allSkills: skillsData.getAllSkills,
      currentUser: userData.getUserById,
    },
  }
}
