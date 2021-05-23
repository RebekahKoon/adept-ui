import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import CreatableSelect from 'react-select/creatable'
import { CREATE_SKILL } from '../../queries/createSkill'
import { GET_ALL_SKILLS } from '../../queries/getAllSkills'
import { StyledButtonSolid } from '../Button'
import { InputWrapper } from '../Input'
import StyledSkillDropdown from './SkillDropdownStyle'

const StyledSkillDropdownContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`

const DashboardButton = styled(StyledButtonSolid)`
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  width: auto;
`

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
})

const SkillsSelect = ({ requiredSkills, setRequiredSkills }) => {
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

  useEffect(() => {
    skillsData ? setSkills(mapSkills(skillsData.getAllSkills)) : setSkills([])
  }, [skillsData])

  const handleAddRequiredSkill = () => {
    if (newSkill && !requiredSkills.includes(newSkill)) {
      setRequiredSkills([...requiredSkills, newSkill])
    }
  }

  // Used to determine if the dropdown value has changed
  const handleChange = (newValue, actionMeta) => {
    setNewSkill(newValue)
  }

  // Creating a new value for the dropdown and adding it to the database
  const handleCreate = async (newValue) => {
    setIsLoading(true)
    const newOption = createOption(newValue)
    setSkills([...skills, newOption])
    // setNewSkill(newValue)
    await createSkill({ variables: { name: newValue } })
    setIsLoading(false)
  }

  return (
    <StyledSkillDropdownContainer>
      <InputWrapper>
        <CreatableSelect
          placeholder={'Search for a skill'}
          isClearable
          isDisabled={isLoading}
          isLoading={isLoading}
          onChange={handleChange}
          onCreateOption={handleCreate}
          options={skills}
          value={newSkill}
          styles={StyledSkillDropdown}
        />
      </InputWrapper>
      <InputWrapper>
        <DashboardButton onClick={handleAddRequiredSkill}>Add</DashboardButton>
      </InputWrapper>
    </StyledSkillDropdownContainer>
  )
}

export default SkillsSelect
