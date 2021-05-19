import { useState } from 'react'
import Router from 'next/router'
import Select from 'react-select'
import { useQuery } from '@apollo/client'
import { SEARCH_JOBS } from '../../queries/search'
import {
  StyledSearchHeader,
  StyledSearchContainer,
  StyledDropdown,
  StyledSearchBar,
  StyledInput,
  StyledSearchDivider,
} from './SearchBarStyle'

function SearchBar({ headerText }) {
  const [option, setOption] = useState('All')
  const handleOptionChange = (e) => {
    setOption(e.value)
    console.log(e.value)
  }

  const [searchItem, setSearchItem] = useState('')
  const handleChange = (e) => {
    e.preventDefault()
    Router.push('/search-results?q=hello')
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
        <h1>{headerText}</h1>
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
            onChange={(e) => setSearchItem(e.target.value)}
          ></StyledInput>
          <button onClick={handleChange}>
            <i className="fa fa-search"></i>
          </button>
        </StyledSearchBar>
      </StyledSearchContainer>
    </StyledSearchHeader>
  )
}

export default SearchBar
