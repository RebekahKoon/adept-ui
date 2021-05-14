// pages/dashboard.js
import Router from 'next/router'
import { useState } from 'react'
import Select from 'react-select'
import Layout from '../components/Layout'
import SearchResult from '../components/SearchResult'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import SearchBar from '../components/SearchBar'
import StyledSideBar from '../components/SideBar'
import MainContentFlexContainer from '../components/styles/MainContentFlexContainer'
import StyledSearchResults from '../styles/SearchResultsStyle'
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
  const JobCategory = ['Option1', 'Option2', 'Option3']
  const Experience = ['Entry Level', 'Associate', 'Senior', 'Leadership']

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

  const createJobCatCheckboxes = () => JobCategory.map(createCheckbox)

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

                <button className="btn btn-default" type="submit">
                  Save
                </button>
              </form>
            </SSRCheckBoxOption>
          </SSRFilterOptions>
        </SSRFilterSection>
      </StyledSideBar>
    )
  }

  const SearchResulDropdown = () => {
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
            <SearchResulDropdown />
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
