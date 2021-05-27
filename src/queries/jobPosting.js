import { gql } from '@apollo/client'

export const GET_JOB_POSTING_BY_ID = gql`
  query getJobPostingById($jobPostId: ID!) {
    getJobPostingById(jobPostId: $jobPostId) {
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
        skillId
        name
      }
      postedBy {
        userId
        name
        email
        type
        city
        state
      }
      applicants {
        jobAppId
        dateApplied
        user {
          userId
          name
          email
          city
          state
        }
      }
    }
  }
`
