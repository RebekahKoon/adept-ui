import styled from 'styled-components'
import Router from 'next/router'
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

function SearchSkillDropdown(props) {
  // Dropdown menu states
  const [skills, setSkills] = useState(props.skillArr)
  const [newSkill, setNewSkill] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ error: false, message: null })

  var currSkill
  for (var i = 0; i < props.skillArr.length; i++) {
    if (props.skillArr[i] == props.skill) {
      currSkill = i
    }
  }

  console.log(props.skillArr[currSkill])

  const mapSkills = (skills) => {
    return skills.map((skill) => ({
      label: skill,
    }))
  }

  useEffect(() => {
    props.skillArr ? setSkills(mapSkills(props.skillArr)) : setSkills([])
  }, [props.skillArr])

  const SearchSkill = (targetSkill) => {
    var searchParams = new URLSearchParams(window.location.search)
    searchParams.set('skill', targetSkill[0].label)
    window.location.search = searchParams.toString()
  }
  // Used to determine if the dropdown value has changed
  const handleChange = (newValue, actionMeta) => {
    SearchSkill(newValue)
  }

  return (
    <SearchSkillDropdownContainer>
      <CreatableSelect
        placeholder={'Search for a skill'}
        isClearable
        isMulti={true}
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
