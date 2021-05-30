import styled from 'styled-components'
import Router from 'next/router'
import { useState, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import Select from 'react-select'
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

  var SearchedSkills = props.skill || []
  const mapSkills = (skills) => {
    return skills.map((skill) => ({
      label: skill,
      value: skill,
    }))
  }

  useEffect(() => {
    props.skillArr ? setSkills(mapSkills(props.skillArr)) : setSkills([])
  }, [props.skillArr])

  const SearchSkill = (targetSkill) => {
    SearchedSkills.push(targetSkill[0].label)
    var searchParams = new URLSearchParams(window.location.search)
    searchParams.set('skill', JSON.stringify(SearchedSkills))
    window.location.search = searchParams.toString()
  }
  // Used to determine if the dropdown value has changed
  const handleChange = (newValue, actionMeta) => {
    SearchSkill(newValue)
  }

  var SearchedSkillsArr = []

  for (var i = 0; i < skills.length; i++) {
    for (var j = 0; j < SearchedSkills.length; j++) {
      if (skills[i].label == SearchedSkills[j]) {
        SearchedSkillsArr.push(skills[i])
      }
    }
  }

  return (
    <SearchSkillDropdownContainer>
      <Select
        defaultValue={SearchedSkillsArr}
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
