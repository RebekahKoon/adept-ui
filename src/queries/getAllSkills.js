import { gql } from '@apollo/client'

export const GET_ALL_SKILLS = gql`
  query GetAllSkills {
    getAllSkills {
      skillId
      name
    }
  }
`
