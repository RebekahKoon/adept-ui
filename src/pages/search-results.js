// pages/dashboard.js
import React from 'react'
import Router from 'next/router'
import { useState } from 'react'
import Layout from '../components/Layout'
import SearchResult from '../components/SearchResult'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import SearchBar from '../components/SearchBar'
import StyledSearchResults from '../styles/SearchResultsStyle'
import {
  SearchResultsParent,
  SSRFilterSideBar,
  SSRSearchResults,
  SSRMain,
  SSRMainContentContainer,
  SSRSearchResultsHeader,
  SSRSearchResultDiv,
  SSRSearchResultFooter,
  SSRSkillDiv,
  SSRSearchResultContainer,
  SSRSearchResultLinkContainer,
  SSRSearchResultContent,
  SSRJobInfoAndLogo,
  SSRJobButton,
  SSRMainContent,
  SSRJobLogoContainer,
  SSRJobTitleContainer,
  SSRJobInfoContainer,
  SSRCompanyContainer,
  SSRCompanyTextContainer,
  SSRSkillsContainer,
  SSRDate,
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

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <SSRCheckBox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)
function SearchResultView(props) {
  const [checked, setChecked] = useState(false)
  const JobType = ['Full Time', 'Part Time', 'Contract', 'Internship']
  const JobCategory = ['Option', 'Option', 'Option']
  const Experience = ['Entry Level', 'Associate', 'Senior', 'Leadership']

  const createCheckboxes = () => items.map(createCheckbox)

  const createCheckbox = (label) => (
    <Checkbox label={label} handleCheckboxChange={toggleCheckbox} key={label} />
  )

  const toggleCheckbox = (label) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label)
    } else {
      selectedCheckboxes.add(label)
    }
  }

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked)
  }

  const handleClick = (e) => {
    e.preventDefault()
    Router.push('/job-posting')
  }
  return (
    <Layout>
      {
        <SearchResultsParent>
          <SearchBar />
          <StyledSearchResults>
            <SSRMain>
              <SSRSearchResultsHeader>
                69,420 results found
                <SSRSortByDropdown>sort by: newest</SSRSortByDropdown>
              </SSRSearchResultsHeader>
              <SSRMainContentContainer>
                <SSRFilterSideBar>
                  <SSRFilterSection>
                    <SSRFilterOptionHeader>JobType</SSRFilterOptionHeader>
                    <SSRFilterOptions>
                      <SSRCheckBoxOption>
                        <label>
                          <Checkbox
                            checked={checked}
                            onChange={handleCheckboxChange}
                          />
                          <span>Full Time</span>
                        </label>
                        <label>
                          <Checkbox
                            checked={checked}
                            onChange={handleCheckboxChange}
                          />
                          <span>Part Time</span>
                        </label>
                        <label>
                          <Checkbox
                            checked={checked}
                            onChange={handleCheckboxChange}
                          />
                          <span>Contract</span>
                        </label>
                        <label>
                          <Checkbox
                            checked={checked}
                            onChange={handleCheckboxChange}
                          />
                          <span>Internship</span>
                        </label>
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
                        <label>
                          <Checkbox
                            checked={checked}
                            onChange={handleCheckboxChange}
                          />
                          <span>Option</span>
                        </label>
                        <label>
                          <Checkbox
                            checked={checked}
                            onChange={handleCheckboxChange}
                          />
                          <span>Option</span>
                        </label>
                        <label>
                          <Checkbox
                            checked={checked}
                            onChange={handleCheckboxChange}
                          />
                          <span>Option</span>
                        </label>
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
                        <label>
                          <Checkbox
                            checked={checked}
                            onChange={handleCheckboxChange}
                          />
                          <span>Entry Level</span>
                        </label>
                        <label>
                          <Checkbox
                            checked={checked}
                            onChange={handleCheckboxChange}
                          />
                          <span>Associate</span>
                        </label>
                        <label>
                          <Checkbox
                            checked={checked}
                            onChange={handleCheckboxChange}
                          />
                          <span>Senior</span>
                        </label>
                        <label>
                          <Checkbox
                            checked={checked}
                            onChange={handleCheckboxChange}
                          />
                          <span>Leadership</span>
                        </label>
                      </SSRCheckBoxOption>
                    </SSRFilterOptions>
                  </SSRFilterSection>
                </SSRFilterSideBar>
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
