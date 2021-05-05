// pages/dashboard.js
import React from 'react'
import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'
import StyledSearchResults from '../styles/SearchResultsStyle'
import { SearchResultsParent } from '../styles/SearchResultsStyle'

const SearchResultView = (props) => (
  <Layout>
    {
      <SearchResultsParent>
        <SearchBar />
        <StyledSearchResults>Search Results</StyledSearchResults>
      </SearchResultsParent>
    }
  </Layout>
)

export default SearchResultView
