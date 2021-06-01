import { useState } from 'react'
import Router from 'next/router'
import Select from 'react-select'
import {
  StyledSearchHeader,
  StyledSearchContainer,
  StyledDropdown,
  StyledForm,
  StyledSearchBar,
  StyledInput,
  StyledSearchDivider,
} from './SearchBarStyle'

function SearchBar({ headerText }) {
  const [option, setOption] = useState('Job Postings')
  const handleOptionChange = (e) => {
    setOption(e.value)
  }

  const [searchItem, setSearchItem] = useState('')
  const handleChange = (e) => {
    e.preventDefault()
    setSearchItem(e.target.value)
    const url =
      option === 'jobPostings'
        ? '/search-results?page=1&q=' + searchItem
        : option === 'Job Postings'
        ? '/search-results?page=1&q=' + searchItem
        : '/search-results?page=1&uq=' + searchItem

    Router.push(url)
  }

  const options = [
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
          <StyledForm>
            <StyledInput
              type="text"
              placeholder="Search"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            ></StyledInput>
            <button onClick={handleChange}>
              <i className="fa fa-search"></i>
            </button>
          </StyledForm>
        </StyledSearchBar>
      </StyledSearchContainer>
    </StyledSearchHeader>
  )
}

export default SearchBar
