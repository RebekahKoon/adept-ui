import { gql } from '@apollo/client'

export const DELETE_WORK_EXPERIENCE = gql`
  mutation DeleteWorkExperience($workExpId: ID!) {
    deleteWorkExperience(workExpId: $workExpId)
  }
`
