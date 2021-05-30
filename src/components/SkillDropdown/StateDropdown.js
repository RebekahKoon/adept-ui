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

const StateDropdownContainer = styled.div`
  span {
    padding-right: 1rem;
  }
`

function StateDropdown(props) {
  // Dropdown menu states
  const [states, setStates] = useState(props.stateArr)

  const mapStates = (states) => {
    return states.map((state) => ({
      label: state,
      value: state,
    }))
  }

  useEffect(() => {
    props.stateArr ? setStates(mapStates(props.stateArr)) : setStates([])
  }, [props.stateArr])

  const SearchState = (targetState) => {
    var searchParams = new URLSearchParams(window.location.search)
    searchParams.set('state', targetState[0].label)
    window.location.search = searchParams.toString()
  }
  // Used to determine if the dropdown value has changed
  const handleChange = (newValue, actionMeta) => {
    SearchState(newValue)
  }

  return (
    <StateDropdownContainer>
      <Select
        placeholder={'Search for a state'}
        isClearable
        isMulti={true}
        onChange={handleChange}
        options={states}
        styles={StyledSkillDropdown}
      />
    </StateDropdownContainer>
  )
}

export default StateDropdown
