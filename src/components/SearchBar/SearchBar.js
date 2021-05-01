/* eslint-disable no-unused-vars */
import React from 'react'

import Link from 'next/link'

import StyledSearchBar from './SearchBarStyle'

import {StyledSearchContainer, StyledSearchHeaderContainer, StyledSearchBarContainer} from './SearchBarStyle'

import NavBar from '../NavBar/NavBar'

const SearchBar = (props) => (
    <StyledSearchBar>
      <NavBar />
      <StyledSearchContainer>
        <StyledSearchHeaderContainer>
            Discover New Jobs and Connections
            <StyledSearchBarContainer>
                
            </StyledSearchBarContainer>
        </StyledSearchHeaderContainer>
      </StyledSearchContainer>
    </StyledSearchBar>
  )
  
  export default SearchBar