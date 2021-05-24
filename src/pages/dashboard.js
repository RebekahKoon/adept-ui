import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import { GET_ALL_SKILLS } from '../queries/getAllSkills'
import { GET_USER_BY_ID } from '../queries/getUserById'
import { ADD_SKILL_TO_USER } from '../queries/addSkillToUser'
import { UPDATE_USER_LOCATION } from '../queries/updateUserLocation'
import { StyledButtonSolid } from '../components/Button'
import { Input } from '../components/Input'
import client from '../apollo/apolloClient'
import Layout from '../components/Layout'
import MainContentFlexContainer from '../components/styles/MainContentFlexContainer'
import StyledSideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import Education from '../components/Education'
import WorkExperience from '../components/WorkExperience'
import Skill from '../components/Skill'
import SkillDropdown from '../components/SkillDropdown'
import Contact from '../components/Contact'
import ContactsModal from '../components/ContactsModal'
import ModalContext from '../context/ModalContext'
import withSession from '../lib/session'
import { StyledSkillList } from '../components/SkillList'

const StyledDashboardBody = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: var(--maxWidth);
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 2.5rem 0px 8rem;
`

const StyledResume = styled.div`
  display: flex;
  margin: 0 auto;
  width: 68%;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  border-radius: 5px;
`

const AddSkillButton = styled(StyledButtonSolid)`
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  margin-left: 5px;
  width: 25%;
  :hover {
    background-color: #4510b7;
  }
`

const ViewContactsButton = styled(AddSkillButton)`
  width: 100%;
`

const StyledSideBarProfile = styled.div`
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

  .fa-edit {
    color: var(--lightGray);
    :hover {
      color: var(--purple);
      cursor: pointer;
    }
  }
`

const EditButton = styled.button`
  background: none;
  border: none;
`

const FormGrid = styled.div`
  margin: 0 auto;
  display: inline-grid;
  text-align: left;
  grid-template-columns: repeat(2, minmax(50px, 600px));
  gap: 1.5rem 1rem;
  line-height: 1.25em;
`

const StyledUpdateButton = styled(StyledButtonSolid)`
  width: 48%;
  margin-left: 5px;
  margin-top: 1rem;

  :hover {
    background-color: #4510b7;
  }
`

const StyledCancelUpdateButton = styled(StyledButtonSolid)`
  width: 48%;
  background-color: var(--lightGray);
  margin-right: 5px;
  :hover {
    background-color: #bab7b0;
  }
`

const StyledSkillDropdownContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`

const SidebarProfile = ({ currentUser, currentUserPosition }) => {
  const [userCity, setUserCity] = useState(currentUser.city)
  const [userState, setUserState] = useState(currentUser.state)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  const [updateUserLocation, { loading, error }] = useMutation(
    UPDATE_USER_LOCATION,
    {
      onCompleted({ updateUserLocation }) {
        if (updateUserLocation) {
          console.log(updateUserLocation)
          setUserCity(updateUserLocation.city)
          setUserState(updateUserLocation.state)
          setFormIsDisplayed(false)
        }
      },
      onError(e) {
        console.log(e)
      },
      refetchQueries: [
        {
          query: GET_USER_BY_ID,
          variables: { userId: currentUser.userId },
        },
      ],
      awaitRefetchQueries: true,
    }
  )

  const onSubmit = (data) => {
    const input = {
      userId: currentUser.userId,
      city: data.city ? data.city : '',
      state: data.state ? data.state : '',
    }

    console.log(input)
    updateUserLocation({ variables: input })
    reset()
  }

  const [formIsDisplayed, setFormIsDisplayed] = useState(false)
  const handleButtonClick = () => {
    formIsDisplayed === false
      ? setFormIsDisplayed(true)
      : setFormIsDisplayed(false)
    reset()
  }

  return (
    <StyledSideBarProfile>
      <p>
        <i className="fas fa-user-circle fa-5x"></i>
      </p>
      <h2>{currentUser.name}</h2>
      <div>{currentUser.email}</div>
      <div>
        {currentUserPosition[0]
          ? currentUserPosition[0].position
          : 'Job seeker'}
      </div>
      {/* Displaying form if edit button is pressed */}
      {formIsDisplayed ? (
        <form style={{ padding: 0 }} onSubmit={handleSubmit(onSubmit)}>
          <FormGrid>
            <Input
              {...register('city', { required: false })}
              type="text"
              placeholder="City"
              id="city"
              isInvalid={errors.city}
              noPadding={true}
            />
            <Input
              {...register('state', { required: false })}
              type="text"
              placeholder="State"
              id="state"
              isInvalid={errors.state}
              noPadding={true}
            />
          </FormGrid>
          {loading ? (
            <div style={{ padding: '1.5rem' }}>
              <Loader type="TailSpin" color="#570EF1" height={26} width={26} />
            </div>
          ) : (
            <>
              <StyledCancelUpdateButton onClick={handleButtonClick}>
                Cancel
              </StyledCancelUpdateButton>
              <StyledUpdateButton type="submit">Update</StyledUpdateButton>
            </>
          )}
        </form>
      ) : (
        <div style={{ color: '#585858' }}>
          {/* This is very hacky, don't know how else to make location centered lol */}
          <EditButton style={{ visibility: 'hidden' }}>
            <i className="fas fa-edit"></i>
          </EditButton>
          {!userCity && !userState ? 'Location not specified' : `${userCity}`}
          {userCity && userState && ', '}
          {userState ? userState : ''}{' '}
          <EditButton onClick={handleButtonClick}>
            <i className="fas fa-edit"></i>
          </EditButton>
        </div>
      )}
    </StyledSideBarProfile>
  )
}

const UserSkills = ({ userSkills, setUserSkills, userId }) => {
  return (
    <TransitionGroup component={StyledSkillList}>
      {userSkills.map((skill) => (
        <CSSTransition
          key={skill.skillId}
          timeout={300}
          classNames="transition"
        >
          <Skill
            name={skill.name}
            skillId={skill.skillId}
            setUserSkills={setUserSkills}
            userId={userId}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

const AddSkillDropdown = ({ allSkills, userId, setUserSkills }) => {
  // Dropdown skill list
  const dropdownSkills = allSkills.map((skill) => ({
    name: skill.skillId,
    label: skill.name,
  }))

  // Dropdown menu states
  const [skills, setSkills] = useState(dropdownSkills)
  const [newSkill, setNewSkill] = useState()
  const [isLoading, setIsLoading] = useState(false)

  // Mutation for adding skill to a user
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
    refetchQueries: [
      {
        query: GET_USER_BY_ID,
        variables: { userId: userId },
      },
    ],
    awaitRefetchQueries: true,
  })

  const handleAddSkillToUser = () => {
    if (newSkill) {
      addSkillToUser({
        variables: { userId: userId, skillId: newSkill.name },
      })
    }
  }

  return (
    <StyledSkillDropdownContainer>
      <SkillDropdown
        placeholderText={'Add skill to user...'}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        skills={skills}
        setSkills={setSkills}
        newSkill={newSkill}
        setNewSkill={setNewSkill}
      />
      {addSkillToUserLoading ? (
        <div
          style={{
            display: 'flex',
            width: '25%',
            marginLeft: '5px',
            justifyContent: 'center',
          }}
        >
          <Loader type="TailSpin" color="#570EF1" height={32} width={32} />
        </div>
      ) : (
        <AddSkillButton onClick={handleAddSkillToUser}>Add</AddSkillButton>
      )}
    </StyledSkillDropdownContainer>
  )
}

const UserContacts = ({ contacts, userId, setUserContacts }) => {
  return contacts
    ? contacts
        .slice(0, 3)
        .map((contact) => (
          <Contact
            key={contact.userId}
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

const DashboardSideBar = ({ currentUser, allSkills, currentUserPosition }) => {
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
      <SidebarProfile
        currentUser={currentUser}
        currentUserPosition={currentUserPosition}
      />
      <hr></hr>
      <h2>{`${currentUser.name.split(' ')[0]}'s Skills`}</h2>
      <UserSkills
        userSkills={userSkills}
        setUserSkills={setUserSkills}
        userId={currentUser.userId}
      />
      <AddSkillDropdown
        allSkills={allSkills}
        userId={currentUser.userId}
        setUserSkills={setUserSkills}
      />
      <hr></hr>
      <h2>{`${currentUser.name.split(' ')[0]}'s Contacts`}</h2>
      <UserContacts
        contacts={userContacts}
        setUserContacts={setUserContacts}
        userId={currentUser.userId}
      />
      <ViewContactsButton onClick={openModal}>
        View All Contacts
      </ViewContactsButton>
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
          numberContacts={userContacts.length}
        />
      </ModalContext.Provider>
    </StyledSideBar>
  )
}

const Dashboard = (props) => {
  console.log(props.allSkills)
  console.log(props.currentUser)

  const [userWorkExperience, setUserWorkExperience] = useState(
    props.currentUser.resume.workExperience
  )
  const [currentUserPosition, setCurrentUserPosition] = useState(
    props.currentUser.resume.workExperience.filter(
      (workExperience) => !workExperience.endDate
    )
  )

  return (
    <Layout>
      <SearchBar headerText="Discover Jobs and Make Connections" />
      <MainContentFlexContainer>
        <StyledDashboardBody>
          <DashboardSideBar
            currentUser={props.currentUser}
            currentUserPosition={currentUserPosition}
            allSkills={props.allSkills}
          />
          <StyledResume>
            <Education
              educationData={props.currentUser.resume.education}
              userId={props.currentUser.userId}
            />
            <WorkExperience
              userWorkExperience={userWorkExperience}
              setUserWorkExperience={setUserWorkExperience}
              setCurrentUserPosition={setCurrentUserPosition}
              userId={props.currentUser.userId}
            />
          </StyledResume>
        </StyledDashboardBody>
      </MainContentFlexContainer>
    </Layout>
  )
}

export default Dashboard

export const getServerSideProps = withSession(async ({ req, res }) => {
  const user = req.session.get('user')

  if (user === undefined) {
    res.setHeader('location', '/login')
    res.statusCode = 302
    res.end()
    return { props: {} }
  }
  const { data: skillsData } = await client.query({
    query: GET_ALL_SKILLS,
  })

  const { data: userData } = await client.query({
    query: GET_USER_BY_ID,
    variables: { userId: user.userId },
  })

  return {
    props: {
      allSkills: skillsData.getAllSkills,
      currentUser: userData.getUserById,
    },
  }
})
