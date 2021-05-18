import { gql } from '@apollo/client'

export const ADD_EDUCATION_TO_RESUME = gql`
  mutation AddEducationToResume(
    $userId: ID!
    $name: String!
    $degree: String!
    $startDate: String!
    $endDate: String!
    $major: String!
    $gpa: Float
  ) {
    addEducationToResume(
      input: {
        userId: $userId
        name: $name
        degree: $degree
        startDate: $startDate
        endDate: $endDate
        major: $major
        gpa: $gpa
      }
    ) {
      userId
      resume {
        resumeId
        education {
          educationId
          name
          degree
          startDate
          endDate
          major
          gpa
        }
        workExperience {
          position
        }
      }
    }
  }
`
