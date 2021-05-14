import { gql } from '@apollo/client'

export const SEARCH_JOBS = gql`
  query SearchQuery($searchJobPostingsCompany: String) {
    searchJobPostings(input: { company: $searchJobPostingsCompany }) {
      jobPostId
      positionTitle
      company
      city
      state
    }
  }
`
