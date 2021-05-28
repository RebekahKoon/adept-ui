import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress
import { ApolloProvider } from '@apollo/client'
import { SWRConfig } from 'swr'
import client from '../apollo/apolloClient'
import '../../public/styles/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
