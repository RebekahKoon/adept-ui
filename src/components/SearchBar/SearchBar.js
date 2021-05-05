import React from 'react'
import Router from 'next/router'
import Image from 'next/image'
import NavBar from '../NavBar'
import StyledSearchBar from './SearchBarStyle'
import {
  StyledSearchContainer,
  StyledSearchHeaderContainer,
  StyledSearchBarContainer,
  StyledSearchFormContainer,
  StyledSearchButton,
  StyledSearchFormInput,
  StyledSearchIcon,
  StyledSearchDivider,
  StyledSearchDividerDiv,
  StyledSearchDropdown,
  StyledSearchDropdownArrow,
  StyledSearchDropdownText,
} from './SearchBarStyle'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const handleClick = (e) => {
      e.preventDefault()
      Router.push('/search-results')
    }
    return (
      <StyledSearchBar>
        <NavBar />
        <StyledSearchContainer>
          <StyledSearchHeaderContainer>
            Search Jobs
            <StyledSearchBarContainer>
              <StyledSearchDropdown>
                <StyledSearchDropdownText>All</StyledSearchDropdownText>
                <StyledSearchDropdownArrow>
                  <Image
                    src="/arrow_drop_down.png"
                    alt="Search Icon"
                    width="22"
                    height="22"
                  />
                </StyledSearchDropdownArrow>
              </StyledSearchDropdown>
              <StyledSearchDivider>
                <StyledSearchDividerDiv />
              </StyledSearchDivider>
              <StyledSearchFormContainer>
                <div>
                  <form onSubmit={handleClick}>
                    <label htmlFor="JobSearch"></label>
                    <StyledSearchFormInput
                      id="JobSearch"
                      type="text"
                      placeholder="Search"
                    ></StyledSearchFormInput>
                    <StyledSearchIcon>
                      <StyledSearchButton type="submit"></StyledSearchButton>
                    </StyledSearchIcon>
                  </form>
                </div>
              </StyledSearchFormContainer>
            </StyledSearchBarContainer>
          </StyledSearchHeaderContainer>
        </StyledSearchContainer>
      </StyledSearchBar>
    )
  }
}
