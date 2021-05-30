import { gql } from '@apollo/client'

export const ADD_CONTACT_TO_USER = gql`
  mutation AddContactToUser($userId: ID!, $contactId: ID!) {
    addContactToUser(userId: $userId, contactId: $contactId) {
      name
      email
      contacts {
        name
        email
        userId
      }
    }
  }
`
