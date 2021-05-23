import { gql } from '@apollo/client'

export const REMOVE_CONTACT_FROM_USER = gql`
  mutation RemoveContactFromUser($userId: ID!, $contactId: ID!) {
    removeContactFromUser(userId: $userId, contactId: $contactId) {
      contacts {
        userId
        name
        email
        city
        state
      }
    }
  }
`
