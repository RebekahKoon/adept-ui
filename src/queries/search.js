import { gql } from '@apollo/client'

export const SEARCH_JOBS = gql`
  query Query {
    getAllJobPostings {
      jobPostId
    }
  }
`

/*gql`
  query SearchQuery($searchJobPostingsCompany: String) {
    searchJobPostings(input: { company: $searchJobPostingsCompany }) {
      jobPostId
      positionTitle
      company
      city
      state
    }
  }
`*/
