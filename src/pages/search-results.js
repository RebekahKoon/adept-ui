// pages/dashboard.js
import React from 'react'
import Router from 'next/router'
import { useState } from 'react'
import Layout from '../components/Layout'
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
                  <SSRSearchResultDiv>
                    <SSRSearchResultContainer>
                      <SSRSearchResultContent>
                        <SSRJobInfoAndLogo>
                          <SSRJobLogoContainer>
                            <i class="fab fa-adn"></i>
                          </SSRJobLogoContainer>
                          <SSRMainContent>
                            <SSRJobTitleContainer>
                              Job Title
                            </SSRJobTitleContainer>
                            <SSRJobInfoContainer>
                              <SSRCompanyContainer>
                                <SSRCompanyTextContainer>
                                  Text
                                </SSRCompanyTextContainer>
                              </SSRCompanyContainer>
                            </SSRJobInfoContainer>
                          </SSRMainContent>
                        </SSRJobInfoAndLogo>
                      </SSRSearchResultContent>
                      <SSRSearchResultLinkContainer>
                        View Job
                        <SSRJobButton
                          value="View Job"
                          label="ViewJob"
                          onClick={handleClick}
                        >
                          <i className="fas fa-arrow-right"></i>
                        </SSRJobButton>
                      </SSRSearchResultLinkContainer>
                    </SSRSearchResultContainer>
                    <SSRSearchResultFooter>
                      <SSRSkillsContainer>
                        <SSRSkillDiv>Skill</SSRSkillDiv>
                        <SSRSkillDiv>Skill</SSRSkillDiv>
                        <SSRSkillDiv>Skill</SSRSkillDiv>
                      </SSRSkillsContainer>
                      <SSRDate>Apr 20, 2021</SSRDate>
                    </SSRSearchResultFooter>
                  </SSRSearchResultDiv>
                  <SSRSearchResultDiv>
                    <SSRSearchResultContainer>
                      <SSRSearchResultContent>
                        <SSRJobInfoAndLogo>
                          <SSRJobLogoContainer>
                            <i class="fab fa-adn"></i>
                          </SSRJobLogoContainer>
                          <SSRMainContent>
                            <SSRJobTitleContainer>
                              Job Title
                            </SSRJobTitleContainer>
                            <SSRJobInfoContainer>
                              <SSRCompanyContainer>
                                <SSRCompanyTextContainer>
                                  Text
                                </SSRCompanyTextContainer>
                              </SSRCompanyContainer>
                            </SSRJobInfoContainer>
                          </SSRMainContent>
                        </SSRJobInfoAndLogo>
                      </SSRSearchResultContent>
                      <SSRSearchResultLinkContainer>
                        View Job
                        <SSRJobButton
                          value="View Job"
                          label="ViewJob"
                          onClick={handleClick}
                        >
                          <i className="fas fa-arrow-right"></i>
                        </SSRJobButton>
                      </SSRSearchResultLinkContainer>
                    </SSRSearchResultContainer>
                    <SSRSearchResultFooter>
                      <SSRSkillsContainer>
                        <SSRSkillDiv>Skill</SSRSkillDiv>
                        <SSRSkillDiv>Skill</SSRSkillDiv>
                        <SSRSkillDiv>Skill</SSRSkillDiv>
                      </SSRSkillsContainer>
                      <SSRDate>Apr 20, 2021</SSRDate>
                    </SSRSearchResultFooter>
                  </SSRSearchResultDiv>
                  <SSRSearchResultDiv>
                    <SSRSearchResultContainer>
                      <SSRSearchResultContent>
                        <SSRJobInfoAndLogo>
                          <SSRJobLogoContainer>
                            <i class="fab fa-adn"></i>
                          </SSRJobLogoContainer>
                          <SSRMainContent>
                            <SSRJobTitleContainer>
                              Job Title
                            </SSRJobTitleContainer>
                            <SSRJobInfoContainer>
                              <SSRCompanyContainer>
                                <SSRCompanyTextContainer>
                                  Text
                                </SSRCompanyTextContainer>
                              </SSRCompanyContainer>
                            </SSRJobInfoContainer>
                          </SSRMainContent>
                        </SSRJobInfoAndLogo>
                      </SSRSearchResultContent>
                      <SSRSearchResultLinkContainer>
                        View Job
                        <SSRJobButton
                          value="View Job"
                          label="ViewJob"
                          onClick={handleClick}
                        >
                          <i className="fas fa-arrow-right"></i>
                        </SSRJobButton>
                      </SSRSearchResultLinkContainer>
                    </SSRSearchResultContainer>
                    <SSRSearchResultFooter>
                      <SSRSkillsContainer>
                        <SSRSkillDiv>Skill</SSRSkillDiv>
                        <SSRSkillDiv>Skill</SSRSkillDiv>
                        <SSRSkillDiv>Skill</SSRSkillDiv>
                      </SSRSkillsContainer>
                      <SSRDate>Apr 20, 2021</SSRDate>
                    </SSRSearchResultFooter>
                  </SSRSearchResultDiv>
                  <SSRSearchResultDiv>
                    <SSRSearchResultContainer>
                      <SSRSearchResultContent>
                        <SSRJobInfoAndLogo>
                          <SSRJobLogoContainer>
                            <i class="fab fa-adn"></i>
                          </SSRJobLogoContainer>
                          <SSRMainContent>
                            <SSRJobTitleContainer>
                              Job Title
                            </SSRJobTitleContainer>
                            <SSRJobInfoContainer>
                              <SSRCompanyContainer>
                                <SSRCompanyTextContainer>
                                  Text
                                </SSRCompanyTextContainer>
                              </SSRCompanyContainer>
                            </SSRJobInfoContainer>
                          </SSRMainContent>
                        </SSRJobInfoAndLogo>
                      </SSRSearchResultContent>
                      <SSRSearchResultLinkContainer>
                        View Job
                        <SSRJobButton
                          value="View Job"
                          label="ViewJob"
                          onClick={handleClick}
                        >
                          <i className="fas fa-arrow-right"></i>
                        </SSRJobButton>
                      </SSRSearchResultLinkContainer>
                    </SSRSearchResultContainer>
                    <SSRSearchResultFooter>
                      <SSRSkillsContainer>
                        <SSRSkillDiv>Skill</SSRSkillDiv>
                        <SSRSkillDiv>Skill</SSRSkillDiv>
                        <SSRSkillDiv>Skill</SSRSkillDiv>
                      </SSRSkillsContainer>
                      <SSRDate>Apr 20, 2021</SSRDate>
                    </SSRSearchResultFooter>
                  </SSRSearchResultDiv>
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
