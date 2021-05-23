import { gql } from '@apollo/client'

export const GET_ALL_JOBS = gql`
  query GetAllJobPostings {
    getAllJobPostings {
      jobPostId
      positionTitle
      company
      datePosted
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
