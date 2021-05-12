import { ApolloClient, createHttpLink, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { cache } from '../../apollo/cache'
import Footer from '../Footer'
import NavBar from '../NavBar'
import { Meta } from '../Meta'
import { GlobalStyle } from '../../components/styles'

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_SERVER,
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

// Initialize ApolloClient
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
})

const Layout = ({ children, hasNav = true, hasFooter = true }) => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Meta />
      {hasNav && <NavBar />}
      {children}
      {hasFooter && <Footer />}
    </ApolloProvider>
  )
}

export default Layout
