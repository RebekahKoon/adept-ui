import { ApolloClient, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { cache } from './cache'

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_SERVER,
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // // if (typeof window !== 'undefined') {
  // const token = localStorage.getItem('token')
  // // }
  // // return the headers to the context so httpLink can read them
  // return {
  //   headers: {
  //     ...headers,
  //     authorization: token ? `Bearer ${token}` : '',
  //   },
  // }
})

// Initialize ApolloClient
const client = new ApolloClient({
  // ssrMode: typeof window === 'undefined',
  link: authLink.concat(httpLink),
  cache,
})

export default client
