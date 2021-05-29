import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import CreatableSelect from 'react-select/creatable'
import { CREATE_SKILL } from '../../queries/createSkill'
import { GET_ALL_SKILLS } from '../../queries/getAllSkills'
import { StyledButtonSolid } from '../Button'
import StyledSkillDropdown from './SkillDropdownStyle'
import { StyledCancelButton } from '../Form/FormStyle'

const SearchSkillDropdownContainer = styled.div`
  span {
    padding-right: 1rem;
  }
`

const SearchSkillDropdown = ({ requiredSkills, setRequiredSkills }) => {
  // Dropdown menu states
  const [skills, setSkills] = useState([])
  const [newSkill, setNewSkill] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ error: false, message: null })

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

  // Used to determine if the dropdown value has changed
  const handleChange = (newValue, actionMeta) => {
    setNewSkill(newValue)
  }

  return (
    <SearchSkillDropdownContainer>
      <CreatableSelect
        placeholder={'Search for a skill'}
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={handleChange}
        options={skills}
        value={newSkill}
        styles={StyledSkillDropdown}
      />
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
    </SearchSkillDropdownContainer>
  )
}

export default SearchSkillDropdown
