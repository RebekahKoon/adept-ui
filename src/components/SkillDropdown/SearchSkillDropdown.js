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

  function removeURLParameter(url, parameter) {
    var urlparts = url.split('?')
    if (urlparts.length >= 2) {
      var prefix = encodeURIComponent(parameter) + '='
      var pars = urlparts[1].split(/[&;]/g)

      for (var i = pars.length; i-- > 0; ) {
        if (pars[i].lastIndexOf(prefix, 0) !== -1) {
          pars.splice(i, 1)
        }
      }

      return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '')
    }
    return url
  }

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
    var searchParams = new URLSearchParams(window.location.search)
    searchParams.set('skill', targetSkill.label)
    window.location.search = searchParams.toString()
  }
  // Used to determine if the dropdown value has changed
  const handleChange = (newValue, actionMeta) => {
    if (newValue == null) {
      var newHref = removeURLParameter(window.location.href, 'skill')
      Router.push(newHref)
    } else {
      SearchSkill(newValue)
    }
  }
  var searchedSkill
  for (var i = 0; i < skills.length; i++) {
    if (props.skill == skills[i].label) {
      searchedSkill = skills[i]
    }
  }

  if (searchedSkill == null && props.skill) {
    return null
  }
  return (
    <SearchSkillDropdownContainer>
      <Select
        defaultValue={searchedSkill}
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
