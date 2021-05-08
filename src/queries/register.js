import { gql } from '@apollo/client'

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $name: String!
    $email: String!
    $password: String!
    $type: UserType!
  ) {
    registerUser(
      input: { name: $name, email: $email, password: $password, type: $type }
    ) {
      userId
      name
      email
      type
    }
  }
`
