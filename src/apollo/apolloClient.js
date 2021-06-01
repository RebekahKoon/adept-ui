import { ApolloClient, HttpLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { ApolloLink } from 'apollo-boost'
import { setContext } from '@apollo/client/link/context'
import { cache } from './cache'

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_SERVER,
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
          locations
        )}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

// If you provide a link chain to ApolloClient, you
// don't provide the `uri` option.
const client = new ApolloClient({
  // The `from` function combines an array of individual links
  // into a link chain
  link: from([errorLink, httpLink]),
  cache: cache,
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
    },
  },
})

export default client
