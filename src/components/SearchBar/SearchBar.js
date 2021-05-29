import { useState } from 'react'
import Router from 'next/router'
import Select from 'react-select'
import {
  StyledSearchHeader,
  StyledSearchContainer,
  StyledDropdown,
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
    if (option == 'Job Postings') {
      var url = '/search-results?page=1&q=' + searchItem
      Router.push(url)
    } else {
      url = '/search-results?page=1&uq=' + searchItem
      Router.push(url)
    }
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
