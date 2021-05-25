import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import CreatableSelect from 'react-select/creatable'
import { CREATE_SKILL } from '../../queries/createSkill'
import { GET_ALL_SKILLS } from '../../queries/getAllSkills'
import { StyledButtonSolid } from '../Button'
import StyledSkillDropdown from './SkillDropdownStyle'
import { PostJobFormGrid } from '../../pages/post-job'
import { StyledCancelButton } from '../Form/FormStyle'

const ButtonControls = styled.div`
  span {
    padding-right: 1rem;
  }
`

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
})

const SkillsSelect = ({ requiredSkills, setRequiredSkills }) => {
  // Dropdown menu states
  const [skills, setSkills] = useState([])
  const [newSkill, setNewSkill] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ error: false, message: null })

  const [
    createSkill,
    { loading: createLoading, error: createError },
  ] = useMutation(CREATE_SKILL, {
    onCompleted({ createSkill }) {
      if (createSkill) {
        setNewSkill({ name: createSkill.skillId, label: createSkill.name })
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

  useEffect(() => {
    skillsData ? setSkills(mapSkills(skillsData.getAllSkills)) : setSkills([])
    if (requiredSkills?.length === 0) {
      setStatus({ error: false, message: null })
    }
  }, [skillsData, requiredSkills])

  const handleAddRequiredSkill = (e) => {
    e.preventDefault()
    if (!newSkill) {
      setStatus({ error: true, message: 'No skill selected' })
    } else if (requiredSkills.includes(newSkill)) {
      setStatus({ error: true, message: 'Duplicate skill' })
    } else {
      setRequiredSkills([...requiredSkills, newSkill])
      setStatus({ error: false, message: 'Skill added' })
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
    setIsLoading(false)
    setStatus({ error: false, message: 'Skill created' })
  }

  return (
    <PostJobFormGrid>
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
      <ButtonControls>
        <span>
          <StyledButtonSolid
            onClick={(e) => {
              handleAddRequiredSkill(e)
            }}
          >
            Add
          </StyledButtonSolid>
        </span>
        <span>
          <StyledCancelButton
            onClick={(e) => {
              e.preventDefault()
              setRequiredSkills([])
            }}
          >
            Clear skills
          </StyledCancelButton>
        </span>
      </ButtonControls>
      {status.message && (
        <p
          style={{
            color: status.error ? 'red' : 'green',
            transition: 'all 0.3s ease',
          }}
        >
          {status.message}
        </p>
      )}
    </PostJobFormGrid>
  )
}

export default SkillsSelect
