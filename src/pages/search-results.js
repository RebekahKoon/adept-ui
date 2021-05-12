// pages/dashboard.js
import Router from 'next/router'
import { useState, useEffect } from 'react'
import Select from 'react-select'
import Layout from '../components/Layout'
import SearchResult from '../components/SearchResult'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import SearchBar from '../components/SearchBar'
import StyledSideBar from '../components/SideBar'
import StyledSearchResults from '../styles/SearchResultsStyle'
import Checkbox from '../components/Checkbox'
import {
  SearchResultsParent,
  SSRSearchResults,
  SSRMain,
  SSRMainContentContainer,
  SSRSearchResultsHeader,
  SSRSortByDropdown,
  SSRMainContentFooter,
  SSRPagination,
  SSRPageNext,
  SSRPagePrev,
  SSRPageNumber,
  SSRFilterSection,
  SSRFilterOptions,
  SSRFilterOptionHeader,
  SSRDividerContainer,
  SSRDivider,
  SSRCheckBoxOption,
  SSRCheckBox,
  CheckboxContainer,
  StyledCheckbox,
  Icon,
} from '../styles/SearchResultsStyle'

function SearchResultView(props) {
  const JobType = ['Full Time', 'Part Time', 'Contract', 'Internship']
  const JobCategory = ['Option', 'Option', 'Option']
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

  const handleClick = (e) => {
    e.preventDefault()
    Router.push('/job-posting')
  }
  return (
    <Layout>
      {
        <SearchResultsParent>
          <SearchBar headerText="Search Jobs" />
          <StyledSearchResults>
            <SSRMain>
              <SSRSearchResultsHeader>
                69,420 results found
                <SSRSortByDropdown>sort by: newest</SSRSortByDropdown>
              </SSRSearchResultsHeader>
              <SSRMainContentContainer>
                <StyledSideBar>
                  <SSRFilterSection>
                    <SSRFilterOptionHeader>JobType</SSRFilterOptionHeader>
                    <SSRFilterOptions>
                      <SSRCheckBoxOption>
                        <form onSubmit={handleFormSubmit}>
                          {createJobTypeCheckboxes()}

                          <button className="btn btn-default" type="submit">
                            Save
                          </button>
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

                          <button className="btn btn-default" type="submit">
                            Save
                          </button>
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
                <SSRSearchResults>
                  <SearchResult />
                  <SearchResult />
                  <SearchResult />
                  <SearchResult />
                </SSRSearchResults>
              </SSRMainContentContainer>
              <SSRMainContentFooter>
                <SSRPagination>
                  <SSRPagePrev>
                    {<i className="fas fa-chevron-left"></i>}
                  </SSRPagePrev>
                  <SSRPageNumber>{'1'}</SSRPageNumber>
                  <SSRPageNumber>{'2'}</SSRPageNumber>
                  <SSRPageNumber>{'3'}</SSRPageNumber>
                  <SSRPageNumber>{'...'}</SSRPageNumber>
                  <SSRPageNumber>{'11'}</SSRPageNumber>
                  <SSRPageNext>
                    {<i className="fas fa-chevron-right"></i>}
                  </SSRPageNext>
                </SSRPagination>
              </SSRMainContentFooter>
            </SSRMain>
          </StyledSearchResults>
        </SearchResultsParent>
      }
    </Layout>
  )
}

export default SearchResultView
