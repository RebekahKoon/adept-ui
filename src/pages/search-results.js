// pages/dashboard.js

import React from 'react'

import Layout from '../components/Layout'

import StyledSearchResults from '../styles/SearchResultsStyle'

const SearchResultView = (props) => (
  <Layout>{<StyledSearchResults>Search Results</StyledSearchResults>}</Layout>
)

export default SearchResultView
