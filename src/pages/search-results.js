// pages/dashboard.js
import Router from 'next/router'
import { useState } from 'react'
import Select from 'react-select'

import { useQuery } from '@apollo/client'
import { SEARCH_JOBS } from '../queries/search'
import Layout from '../components/Layout'
import SearchResult from '../components/SearchResult'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import SearchBar from '../components/SearchBar'
import StyledSideBar from '../components/SideBar'
import MainContentFlexContainer from '../components/styles/MainContentFlexContainer'
import client from '../apollo/apolloClient'
import Checkbox from '../components/Checkbox'
import {
  SSRSearchResults,
  SSRMain,
  SSRMainContentContainer,
  SSRSearchResultsHeader,
  SSRSortByDropdown,
  SSRFilterSection,
  SSRFilterOptions,
  SSRFilterOptionHeader,
  SSRDividerContainer,
  SSRDivider,
  SSRCheckBoxOption,
  StyledDropdown,
} from '../styles/SearchResultsStyle'

function SearchResultView(props) {
  const JobType = ['Full Time', 'Part Time', 'Contract', 'Internship']
  const JobSkills = ['React', 'Python', 'Javascript']
  const Experience = ['Entry Level', 'Associate', 'Senior', 'Leadership']
  console.log(props.allSkills)

  const selectedCheckboxes = new Set()

  const toggleCheckbox = (label) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label)
    } else {
      selectedCheckboxes.add(label)
    }
  }

  const handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault()
    for (const checkbox of selectedCheckboxes) {
      console.log(checkbox, 'is selected.')
    }
  }

  const createCheckbox = (label) => (
    <Checkbox label={label} handleCheckboxChange={toggleCheckbox} key={label} />
  )

  const createJobTypeCheckboxes = () => JobType.map(createCheckbox)

  const createJobCatCheckboxes = () => JobSkills.map(createCheckbox)

  const createExperienceCheckboxes = () => Experience.map(createCheckbox)

  const [sortOption, setOption] = useState('All')
  const handleOptionChange = (e) => {
    setOption(e.value)
    console.log(e.value)
  }

  const sortOptions = [
    {
      label: 'Newest',
      value: 'newest',
    },
    {
      label: 'Oldest',
      value: 'oldest',
    },
  ]

  const handleClick = (e) => {
    e.preventDefault()
    Router.push('/job-posting')
  }

  const SearchResultSideBar = () => {
    return (
      <StyledSideBar>
        <SSRFilterSection>
          <SSRFilterOptionHeader>JobType</SSRFilterOptionHeader>
          <SSRFilterOptions>
            <SSRCheckBoxOption>
              <form onSubmit={handleFormSubmit}>
                {createJobTypeCheckboxes()}
              </form>
            </SSRCheckBoxOption>
          </SSRFilterOptions>
        </SSRFilterSection>
        <SSRFilterSection>
          <SSRDividerContainer>
            <SSRDivider />
          </SSRDividerContainer>
          <SSRFilterOptionHeader>Job Category</SSRFilterOptionHeader>
          <SSRFilterOptions>
            <SSRCheckBoxOption>
              <form onSubmit={handleFormSubmit}>
                {createJobCatCheckboxes()}
              </form>
            </SSRCheckBoxOption>
          </SSRFilterOptions>
        </SSRFilterSection>
        <SSRFilterSection>
          <SSRDividerContainer>
            <SSRDivider />
          </SSRDividerContainer>
          <SSRFilterOptionHeader>Experience</SSRFilterOptionHeader>
          <SSRFilterOptions>
            <SSRCheckBoxOption>
              <form onSubmit={handleFormSubmit}>
                {createExperienceCheckboxes()}
                <button type="submit">Submit</button>
              </form>
            </SSRCheckBoxOption>
          </SSRFilterOptions>
        </SSRFilterSection>
      </StyledSideBar>
    )
  }

  const SearchResultDropdown = () => {
    return (
      <SSRSortByDropdown>
        Sort by:
        <Select
          defaultValue={sortOptions[0]}
          onChange={handleOptionChange}
          options={sortOptions}
          styles={StyledDropdown}
          indicatorSeparator={false}
          isSearchable={false}
        />
      </SSRSortByDropdown>
    )
  }
  return (
    <Layout>
      <SearchBar headerText="Search Jobs" />
      <MainContentFlexContainer>
        <SSRMain>
          <SSRSearchResultsHeader>
            69,420 results found
            <SearchResultDropdown />
          </SSRSearchResultsHeader>
          <SSRMainContentContainer>
            <SearchResultSideBar />
            <SSRSearchResults>
              <SearchResult />
              <SearchResult />
              <SearchResult />
              <SearchResult />
            </SSRSearchResults>
          </SSRMainContentContainer>
        </SSRMain>
      </MainContentFlexContainer>
    </Layout>
  )
}

export default SearchResultView

export const getServerSideProps = async () => {
  const data = await client.query({
    query: SEARCH_JOBS,
  })

  return {
    props: {
      allSkills: data,
    },
  }
}
