import { gql } from '@apollo/client'

export const CREATE_JOB_POSTING = gql`
  mutation CreateJobPosting(
    $positionTitle: String!
    $company: String!
    $datePosted: String!
    $city: String
    $state: String
    $salary: Int
    $type: JobType!
    $description: String!
    $skillsRequired: [ID!]!
    $postedBy: ID!
  ) {
    createJobPosting(
      input: {
        positionTitle: $positionTitle
        company: $company
        datePosted: $datePosted
        city: $city
        state: $state
        salary: $salary
        type: $type
        description: $description
        skillsRequired: $skillsRequired
        postedBy: $postedBy
      }
    ) {
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
      postedBy {
        userId
        name
      }
    }
  }
`
