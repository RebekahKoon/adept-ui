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
} from '../styles/SearchResultsStyle'

const SearchResultView = (props) => (
  <Layout>
    {
      <SearchResultsParent>
        <SearchBar />
        <StyledSearchResults>
          <SSRMain>
            <SSRMainContentContainer>
              <SSRFilterSideBar>Hi</SSRFilterSideBar>
              <SSRSearchResults>Bye</SSRSearchResults>
            </SSRMainContentContainer>
          </SSRMain>
        </StyledSearchResults>
      </SearchResultsParent>
    }
  </Layout>
)

export default SearchResultView
