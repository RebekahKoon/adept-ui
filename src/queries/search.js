import { gql } from '@apollo/client'

export const SEARCH_JOBS = gql`
  query SearchQuery($searchTerm: String) {
    searchJobPostings(
      company: $searchTerm
      positionTitle: $searchTerm
      city: $searchTerm
      state: $searchTerm
    ) {
      jobPostId
      positionTitle
      company
      city
      state
      salary
      type
      description
      skillsRequired {
        name
      }
      datePosted
    }
  }
`
