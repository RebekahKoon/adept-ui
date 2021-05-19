import { gql } from '@apollo/client'

export const DELETE_EDUCATION = gql`
  mutation DeleteEducation($educationId: ID!) {
    deleteEducation(educationId: $educationId)
  }
`
