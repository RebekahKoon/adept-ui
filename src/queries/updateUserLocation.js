import { gql } from '@apollo/client'

export const UPDATE_USER_LOCATION = gql`
  mutation UpdateUserLocation($userId: ID!, $city: String!, $state: String!) {
    updateUserLocation(input: { userId: $userId, city: $city, state: $state }) {
      userId
      city
      state
    }
  }
`
