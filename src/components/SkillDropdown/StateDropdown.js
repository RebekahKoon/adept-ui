import styled from 'styled-components'
import Router from 'next/router'
import { useState, useEffect } from 'react'
import Select from 'react-select'
import StyledSkillDropdown from './SkillDropdownStyle'

const StateDropdownContainer = styled.div`
  span {
    padding-right: 1rem;
  }
`

function StateDropdown(props) {
  // Dropdown menu states
  const [states, setStates] = useState(props.stateArr)

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
    console.log(newValue)
    if (newValue.length == 0) {
      var newHref = removeURLParameter(window.location.href, 'state')
      Router.push(newHref)
    } else {
      SearchState(newValue)
    }
  }

  var searchedState
  for (var i = 0; i < states.length; i++) {
    if (props.state == states[i].label) {
      searchedState = states[i]
    }
  }

  if (searchedState == null && props.state) {
    return null
  }

  return (
    <StateDropdownContainer>
      <Select
        defaultValue={searchedState}
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
