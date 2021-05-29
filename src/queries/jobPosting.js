import { gql } from '@apollo/client'

export const GET_JOB_POSTING_BY_ID = gql`
  query GetJobPostingById($jobPostId: ID!) {
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
      }
      applicants {
        user {
          userId
          name
          email
          city
          state
          skills {
            skillId
            name
          }
        }
      }
    }
  }
`

export const CREATE_JOB_APPLICATION = gql`
  mutation CreateJobApplication(
    $jobPostId: String!
    $userId: String!
    $dateApplied: String
  ) {
    createJobApplication(
      input: {
        jobPostId: $jobPostId
        userId: $userId
        dateApplied: $dateApplied
      }
    ) {
      jobAppId
    }
  }
`

export const ADD_CONTACT = gql`
  mutation AddContact($userId: ID!, $contactId: ID!) {
    addContactToUser(userId: $userId, contactId: $contactId) {
      contacts {
        userId
      }
    }
  }
`

export const GET_USER_CONTACTS_AND_SKILLS = gql`
  query GetUserContacts($userId: ID!) {
    getUserById(userId: $userId) {
      contacts {
        userId
      }
      skills {
        name
      }
    }
  }
`
