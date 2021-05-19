import { gql } from '@apollo/client'

export const CREATE_SKILL = gql`
  mutation CreateSkill($name: String!) {
    createSkill(name: $name) {
      skillId
      name
    }
  }
`
