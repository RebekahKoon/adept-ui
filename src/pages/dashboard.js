import { useState } from 'react'
import { useMutation } from '@apollo/client'
import styled from 'styled-components'
import CreatableSelect from 'react-select/creatable'
import { GET_ALL_SKILLS } from '../queries/getAllSkills'
import { GET_USER_BY_ID } from '../queries/getUserById'
import { CREATE_SKILL } from '../queries/createSkill'
import { ADD_SKILL_TO_USER } from '../queries/addSkillToUser'
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

// Styling for the skill dropdown menu
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

const UserSkills = ({ userSkills, setUserSkills, userId }) => {
  return userSkills.map((skill) => (
    <Skill
      name={skill.name}
      skillId={skill.skillId}
      setUserSkills={setUserSkills}
      userId={userId}
    />
  ))
}

const AddSkillDropdown = ({ allSkills, userId, setUserSkills }) => {
  // Dropdown skill list
  let dropdownSkills = allSkills.map((skill) => ({
    name: skill.skillId,
    label: skill.name,
  }))

  // Dropdown menu states
  const [skills, setSkills] = useState(dropdownSkills)
  const [newSkill, setNewSkill] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const [
    addSkillToUser,
    { loading: addSkillToUserLoading, error: addSkillToUserError },
  ] = useMutation(ADD_SKILL_TO_USER, {
    onCompleted({ addSkillToUser }) {
      if (addSkillToUser) {
        console.log(addSkillToUser)
        setUserSkills(addSkillToUser.skills)
      }
    },
    onError(e) {
      console.log(e)
    },
  })

  const [
    createSkill,
    { loading: createSkillLoading, error: createSkillError },
  ] = useMutation(CREATE_SKILL, {
    onCompleted({ createSkill }) {
      if (createSkill) {
        dropdownSkills = [
          ...dropdownSkills,
          { name: createSkill.skillId, label: createSkill.name },
        ]
        setSkills(dropdownSkills)
        setNewSkill({ name: createSkill.skillId, label: createSkill.name })
      }
    },
    onError(e) {
      console.log(e)
    },
  })

  const handleAddSkillToUser = () => {
    addSkillToUser({
      variables: { userId: userId, skillId: newSkill.name },
    })
  }

  // Used to determine if the dropdown value has changed
  const handleChange = (newValue, actionMeta) => {
    console.group('Value Changed')
    console.log(newValue)
    console.log(`action: ${actionMeta.action}`)
    console.groupEnd()
    setNewSkill(newValue)
  }

  // Creating a new value for the dropdown and adding it to the database
  const handleCreate = (newValue) => {
    setIsLoading(true)
    console.group('Option created')
    console.log('Wait a moment...')
    setTimeout(() => {
      const newOption = createOption(newValue)
      console.log(newOption)
      console.groupEnd()
      setIsLoading(false)

      createSkill({ variables: { name: newValue } })
    }, 1000)
  }

  return (
    <StyledSkillDropdownContainer>
      <CreatableSelect
        placeholder={'Add skill to user...'}
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={handleChange}
        onCreateOption={handleCreate}
        options={skills}
        value={newSkill}
        styles={StyledSkillDropdown}
      />
      <DashboardButton onClick={handleAddSkillToUser}>Add</DashboardButton>
    </StyledSkillDropdownContainer>
  )
}

const UserContacts = ({ contacts, userId, setUserContacts }) => {
  return contacts
    ? contacts
        .slice(0, 3)
        .map((contact) => (
          <Contact
            name={contact.name}
            email={contact.email}
            city={contact.city}
            state={contact.state}
            contactId={contact.userId}
            userId={userId}
            setUserContacts={setUserContacts}
          />
        ))
    : null
}

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
})

const DashboardSideBar = ({ currentUser, allSkills }) => {
  // Used to open modal
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  const [userSkills, setUserSkills] = useState(currentUser.skills)
  const [userContacts, setUserContacts] = useState(currentUser.contacts)

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
        <UserSkills
          userSkills={userSkills}
          setUserSkills={setUserSkills}
          userId={currentUser.userId}
        />
      </StyledSkillList>
      <AddSkillDropdown
        allSkills={allSkills}
        userId={currentUser.userId}
        setUserSkills={setUserSkills}
      />
      <hr></hr>
      <h2>{currentUser.name.split(' ')[0]}'s Contacts</h2>
      <UserContacts
        contacts={userContacts}
        setUserContacts={setUserContacts}
        userId={currentUser.userId}
      />
      <DashboardButton onClick={openModal}>View All Contacts</DashboardButton>
      <ModalContext.Provider
        value={{
          isOpen,
          closeModal,
        }}
      >
        <ContactsModal
          contacts={userContacts}
          setUserContacts={setUserContacts}
          userId={currentUser.userId}
          numberContacts={currentUser.contacts.length}
        />
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
            <Education
              educationData={props.currentUser.resume.education}
              userId={props.currentUser.userId}
            />
            <WorkExperience
              workExperienceData={props.currentUser.resume.workExperience}
              userId={props.currentUser.userId}
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
    variables: { userId: '43bd7639-97e0-4ed1-b3bb-7beea0f6687e' },
  })

  return {
    props: {
      allSkills: skillsData.getAllSkills,
      currentUser: userData.getUserById,
    },
  }
}
