import { gql } from '@apollo/client'

export const ADD_WORK_EXPERIENCE_TO_RESUME = gql`
  mutation AddWorkExperienceToResume(
    $userId: String!
    $company: String!
    $position: String!
    $startDate: String!
    $endDate: String
    $isCurrentPosition: Boolean!
    $city: String
    $state: String
    $description: String!
  ) {
    addWorkExperienceToResume(
      input: {
        userId: $userId
        company: $company
        position: $position
        startDate: $startDate
        endDate: $endDate
        isCurrentPosition: $isCurrentPosition
        city: $city
        state: $state
        description: $description
      }
    ) {
      userId
      resume {
        resumeId
        education {
          educationId
        }
        workExperience {
          workExpId
          company
          position
          startDate
          endDate
          isCurrentPosition
          city
          state
          description
        }
      }
    }
  }
`
