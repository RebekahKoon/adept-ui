import { ApolloProvider } from '@apollo/client'
import { SWRConfig } from 'swr'
import client from '../apollo/apolloClient'

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <SWRConfig
        value={{
          fetcher: fetch,
          onError: (err) => {
            console.error(err)
          },
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </ApolloProvider>
  )
}
