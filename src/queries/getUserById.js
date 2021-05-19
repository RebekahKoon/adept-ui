import { gql } from '@apollo/client'

export const GET_USER_BY_ID = gql`
  query GetUserById($userId: ID!) {
    getUserById(userId: $userId) {
      userId
      name
      email
      city
      state
      password
      type
      resume {
        resumeId
        education {
          educationId
          name
          degree
          major
          startDate
          endDate
          gpa
        }
        workExperience {
          workExpId
          position
          company
          startDate
          endDate
          isCurrentPosition
          city
          state
          description
        }
      }
      contacts {
        userId
        name
        email
        city
        state
      }
      jobApplications {
        jobAppId
        jobPosting {
          positionTitle
        }
        user {
          name
        }
      }
      jobPostings {
        jobPostId
        company
        postedBy {
          name
        }
      }
      skills {
        skillId
        name
      }
    }
  }
`