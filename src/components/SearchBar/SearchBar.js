import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import StyledSearchBar from './SearchBarStyle'
import NavBar from '../NavBar'
import {
  StyledSearchHeader,
  StyledSearchContainer,
  StyledDropdown,
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

const options = [
  {
    label: 'Job Postings',
    value: 'jobPostings',
  },
  {
    label: 'Users',
    value: 'users',
  },
]

const SearchBar = () => {
  const [option, setOption] = useState('All')
  const handleOptionChange = (e) => {
    setOption(e.target.value)
  }

  return (
    <StyledSearchHeader>
      <StyledSearchContainer>
        <h1>Discover Jobs and Make Connections</h1>
        <StyledDropdown>
          <select
            value={option}
            onChange={handleOptionChange}
            className="optionSelect"
          >
            <option value="all" label="ALL">
              All
            </option>
            <option value="jobPostings" label="Job Postings"></option>
            <option value="users" label="Users"></option>
          </select>
        </StyledDropdown>
      </StyledSearchContainer>
    </StyledSearchHeader>
  )
}

export default SearchBar
