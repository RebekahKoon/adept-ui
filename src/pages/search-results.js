// pages/dashboard.js
import React from 'react'
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
  SSRSortByDropdown,
  SSRMainContentFooter,
  SSRPagination,
  SSRPageNext,
  SSRPagePrev,
  SSRPageNumber,
  SSRFilterSection,
  SSRFilterOptions,
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
class SearchResultView extends React.Component {
  state = { checked: false }

  handleCheckboxChange = (event) =>
    this.setState({ checked: event.target.checked })

  render() {
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
                      JobType
                      <SSRFilterOptions>
                        <SSRCheckBoxOption>
                          <label>
                            <Checkbox
                              checked={this.state.checked}
                              onChange={this.handleCheckboxChange}
                            />
                            <span>Label Text</span>
                          </label>
                        </SSRCheckBoxOption>
                      </SSRFilterOptions>
                    </SSRFilterSection>
                    <SSRFilterSection>
                      Job Category
                      <SSRFilterOptions>
                        <SSRCheckBoxOption></SSRCheckBoxOption>
                      </SSRFilterOptions>
                    </SSRFilterSection>
                    <SSRFilterSection>
                      Experience
                      <SSRFilterOptions>
                        <SSRCheckBoxOption></SSRCheckBoxOption>
                      </SSRFilterOptions>
                    </SSRFilterSection>
                  </SSRFilterSideBar>
                  <SSRSearchResults>Bye</SSRSearchResults>
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
}

export default SearchResultView
