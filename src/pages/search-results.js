// pages/dashboard.js
import React from 'react'
import { useState } from 'react'
import Layout from '../components/Layout'
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
  CheckboxLabel,
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

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked)
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
                </SSRFilterSideBar>
                <SSRSearchResults>
                  <SSRSearchResultDiv>Bye</SSRSearchResultDiv>
                  <SSRSearchResultDiv>Bye</SSRSearchResultDiv>
                  <SSRSearchResultDiv>Bye</SSRSearchResultDiv>
                  <SSRSearchResultDiv>Bye</SSRSearchResultDiv>
                </SSRSearchResults>
              </SSRMainContentContainer>
              <SSRMainContentFooter>
                <SSRPagination>
                  <SSRPagePrev>{'<'}</SSRPagePrev>
                  <SSRPageNumber>{'1'}</SSRPageNumber>
                  <SSRPageNumber>{'2'}</SSRPageNumber>
                  <SSRPageNumber>{'3'}</SSRPageNumber>
                  <SSRPageNumber>{'...'}</SSRPageNumber>
                  <SSRPageNumber>{'11'}</SSRPageNumber>
                  <SSRPageNext>{'>'}</SSRPageNext>
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
