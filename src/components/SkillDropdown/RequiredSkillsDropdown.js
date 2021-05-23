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
  span {
    padding-left: 1rem;
  }
`

const AddButton = styled(StyledButtonSolid)`
  /* padding-top: 0.6rem;
  padding-bottom: 0.6rem; */
  /* width: auto; */
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
    refetchQueries: [
      {
        query: GET_ALL_SKILLS,
      },
    ],
    awaitRefetchQueries: true,
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
  const [status, setStatus] = useState({ error: false, message: null })

  useEffect(() => {
    skillsData ? setSkills(mapSkills(skillsData.getAllSkills)) : setSkills([])
    if (requiredSkills?.length === 0) {
      setStatus({ error: false, message: null })
    }
  }, [skillsData, requiredSkills])

  const handleAddRequiredSkill = (e) => {
    e.preventDefault()
    if (newSkill && !requiredSkills.includes(newSkill)) {
      console.log(newSkill)
      setRequiredSkills([...requiredSkills, newSkill])
      setStatus({ error: false, message: 'Skill added' })
    } else {
      setStatus({ error: true, message: 'Duplicate skill' })
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
    await createSkill({ variables: { name: newValue } })
    setNewSkill(newValue)
    setIsLoading(false)
    setStatus({ error: false, message: 'Skill created' })
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
        <AddButton
          onClick={(e) => {
            handleAddRequiredSkill(e)
          }}
        >
          Add
        </AddButton>
        <StyledButtonSolid
          onClick={() => {
            setRequiredSkills([])
          }}
        >
          Clear all
        </StyledButtonSolid>

        {status.message && (
          <span
            style={{
              color: status.error ? 'red' : 'green',
              transition: 'all 0.3s ease',
            }}
          >
            {status.message}
          </span>
        )}
      </InputWrapper>
    </StyledSkillDropdownContainer>
  )
}

export default SkillsSelect
