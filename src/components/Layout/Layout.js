import { ApolloClient, ApolloProvider } from '@apollo/client'
import { cache } from '../../apollo/cache'
import Footer from '../Footer'
import NavBar from '../NavBar'
import { Meta } from '../Meta'
import { GlobalStyle } from '../../components/styles'

// Initialize ApolloClient
// uri needs to be changed to accommodate production
const client = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql',
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
