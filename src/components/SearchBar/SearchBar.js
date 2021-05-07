import React from 'react'
import { useState } from 'react'
import Select from 'react-select'
import {
  StyledSearchHeader,
  StyledSearchContainer,
  StyledDropdown,
  StyledSearchBar,
  StyledInput,
  StyledSearchDivider,
} from './SearchBarStyle'

const SearchBar = () => {
  const [option, setOption] = useState('All')
  const handleOptionChange = (e) => {
    setOption(e.value)
    console.log(e.value)
  }

  const [searchItem, setSearchItem] = useState('')
  const handleChange = (e) => {
    setSearchItem(e.target.value)
  }

  const options = [
    {
      label: 'All',
      value: 'all',
    },
    {
      label: 'Job Postings',
      value: 'jobPostings',
    },
    {
      label: 'Users',
      value: 'users',
    },
  ]

  return (
    <StyledSearchHeader>
      <StyledSearchContainer>
        <h1>Discover Jobs and Make Connections</h1>
        <StyledSearchBar>
          <Select
            defaultValue={options[0]}
            onChange={handleOptionChange}
            options={options}
            styles={StyledDropdown}
            indicatorSeparator={false}
            isSearchable={false}
          />
          <StyledSearchDivider />
          <StyledInput
            type="text"
            placeholder="Search"
            value={searchItem}
            onChange={handleChange}
          ></StyledInput>
          <button disabled>
            <i className="fa fa-search"></i>
          </button>
        </StyledSearchBar>
      </StyledSearchContainer>
    </StyledSearchHeader>
  )
}

export default SearchBar
