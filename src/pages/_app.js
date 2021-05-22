import { ApolloProvider } from '@apollo/client'
import { SWRConfig } from 'swr'
import client from '../apollo/apolloClient'

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: fetch,
        onError: (err) => {
          console.error(err)
        },
      }}
    >
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </SWRConfig>
  )
}
