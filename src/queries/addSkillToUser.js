import { gql } from '@apollo/client'

export const ADD_SKILL_TO_USER = gql`
  mutation AddSkillToUser($userId: ID!, $skillId: ID!) {
    addSkillToUser(userId: $userId, skillId: $skillId) {
      userId
      skills {
        skillId
        name
      }
    }
  }
`
