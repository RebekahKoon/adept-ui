import { gql } from '@apollo/client'

export const APPLY_TO_JOB = gql`
  mutation Mutation($createJobApplicationInput: CreateJobApplicationInput!) {
    createJobApplication(input: $createJobApplicationInput) {
      jobAppId
      user {
        name
        email
      }
      jobPosting {
        positionTitle
        company
        jobPostId
      }
      dateApplied
    }
  }
`
