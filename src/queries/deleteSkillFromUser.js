import { gql } from '@apollo/client'

export const DELETE_SKILL_FROM_USER = gql`
  mutation DeleteSkillFromUser($skillId: ID!, $userId: ID!) {
    deleteSkillFromUser(skillId: $skillId, userId: $userId) {
      skills {
        skillId
        name
      }
    }
  }
`
