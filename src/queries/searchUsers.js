import { gql } from '@apollo/client'

export const SEARCH_USERS = gql`
  query SearchUsers($searchTerm: String) {
    searchUsers(name: $searchTerm) {
      userId
      name
      email
      city
      state
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
      skills {
        skillId
        name
      }
      contacts {
        userId
      }
    }
  }
`
