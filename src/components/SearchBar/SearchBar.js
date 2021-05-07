import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import Select from 'react-select'
import Image from 'next/image'
import StyledSearchBar from './SearchBarStyle'
import NavBar from '../NavBar'
import {
  StyledSearchHeader,
  StyledSearchContainer,
  StyledDropdown,
  customStyles,
  // StyledSearchContainer,
  // StyledSearchHeaderContainer,
  // StyledSearchBarContainer,
  // StyledSearchFormContainer,
  // StyledSearchButton,
  // StyledSearchFormInput,
  // StyledSearchIcon,
  // StyledSearchDivider,
  // StyledSearchDividerDiv,
  // StyledSearchDropdown,
  // StyledSearchDropdownArrow,
  // StyledSearchDropdownText,
} from './SearchBarStyle'

// export default class SearchBar extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     const handleClick = (e) => {
//       e.preventDefault()
//       Router.push('/search-results')
//     }
//     return (
//       <StyledSearchBar>
//         <NavBar />
//         <StyledSearchContainer>
//           <StyledSearchHeaderContainer>
//             Discover New Jobs and Connections
//             <StyledSearchBarContainer>
//               <StyledSearchDropdown>
//                 <StyledSearchDropdownText>All</StyledSearchDropdownText>
//                 <StyledSearchDropdownArrow>
//                   <Image
//                     src="/arrow_drop_down.png"
//                     alt="Search Icon"
//                     width="22"
//                     height="22"
//                   />
//                 </StyledSearchDropdownArrow>
//               </StyledSearchDropdown>
//               <StyledSearchDivider>
//                 <StyledSearchDividerDiv />
//               </StyledSearchDivider>
//               <StyledSearchFormContainer>
//                 <div>
//                   <form onSubmit={handleClick}>
//                     <label htmlFor="JobSearch"></label>
//                     <StyledSearchFormInput
//                       id="JobSearch"
//                       type="text"
//                       placeholder="Search"
//                     ></StyledSearchFormInput>
//                     <StyledSearchIcon>
//                       <StyledSearchButton type="submit"></StyledSearchButton>
//                     </StyledSearchIcon>
//                   </form>
//                 </div>
//               </StyledSearchFormContainer>
//             </StyledSearchBarContainer>
//           </StyledSearchHeaderContainer>
//         </StyledSearchContainer>
//       </StyledSearchBar>
//     )
//   }
// }

const SearchBar = () => {
  const [option, setOption] = useState('All')
  const handleOptionChange = (e) => {
    setOption(e.value)
    console.log(e.value)
  }

  const options = [
    {
      label: 'All',
      value: 'all',
    },
    {
      label: 'Job Postings',
      value: 'jobPostings',
    },
    {
      label: 'Users',
      value: 'users',
    },
  ]

  return (
    <StyledSearchHeader>
      <StyledSearchContainer>
        <h1>Discover Jobs and Make Connections</h1>
        <StyledDropdown>
          <Select
            defaultValue={options[0]}
            onChange={handleOptionChange}
            options={options}
            styles={customStyles}
            indicatorSeparator={false}
            isSearchable={false}
          />
        </StyledDropdown>
      </StyledSearchContainer>
    </StyledSearchHeader>
  )
}

export default SearchBar
