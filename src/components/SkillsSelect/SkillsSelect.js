import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import CreatableSelect from 'react-select/creatable'
import { CREATE_SKILL } from '../../queries/createSkill'
import { GET_ALL_SKILLS } from '../../queries/getAllSkills'
import Skill from '../Skill'
import { StyledButtonSolid } from '../Button'
import { StyledSkillDropdown } from '../../pages/dashboard'

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

const DashboardButton = styled(StyledButtonSolid)`
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  width: 100%;
  :hover {
    background-color: #4510b7;
  }
`

const Skills = ({ skills }) => {
  return skills ? (
    skills?.map((skill) => <Skill key={skill.skillId} name={skill.name} />)
  ) : (
    <p>{'loading'}</p>
  )
}

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
})

const SkillsSelect = (params) => {
  const [
    createSkill,
    { loading: createLoading, error: createError },
  ] = useMutation(CREATE_SKILL, {
    onCompleted({ createSkill }) {
      if (createSkill) {
        console.log(createSkill)
      }
    },
    onError(e) {
      console.log(e)
    },
  })

  const { loading, error, data: skillsData } = useQuery(GET_ALL_SKILLS)

  // Converts data from graphql response to dropdown
  const mapSkills = (skills) => {
    return skills.map((skill) => ({
      name: skill.skillId,
      label: skill.name,
    }))
  }

  // Dropdown menu states
  const [skills, setSkills] = useState([])
  const [newSkill, setNewSkill] = useState()
  const [isLoading, setIsLoading] = useState(false)

  // Used to determine if the dropdown value has changed
  const handleChange = (newValue, actionMeta) => {
    console.group('Value Changed')
    console.log(newValue)
    console.log(`action: ${actionMeta.action}`)
    console.groupEnd()
    setNewSkill(newValue)
  }

  // Creating a new value for the dropdown and adding it to the database
  const handleCreate = async (newValue) => {
    setIsLoading(true)
    // console.group('Option created')
    // console.log('Wait a moment...')
    const newOption = createOption(newValue)
    // console.log(newOption)
    // console.groupEnd()

    setSkills([...skills, newOption])
    setNewSkill(newValue)

    await createSkill({ variables: { name: newValue } })
    setIsLoading(false)
  }
  useEffect(() => {
    console.log(skillsData)
    skillsData ? setSkills(mapSkills(skillsData.getAllSkills)) : setSkills([])
  }, [skillsData])

  return (
    <>
      <StyledSkillList>
        {!skillsData ? 'loading' : <Skills skills={skillsData?.getAllSkills} />}
      </StyledSkillList>
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
        <DashboardButton>Add</DashboardButton>
      </StyledSkillDropdownContainer>
    </>
  )
}

export default SkillsSelect
