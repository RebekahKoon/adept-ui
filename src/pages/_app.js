import React, { createContext, useState } from 'react'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  Observable,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

let authToken = ''

const initial = {
  appState: { loggedIn: false },
  appSetLogin: (token) => {},
  appSetLogout: () => {},
  appSetAuthToken: (token) => {},
  appClearAuthToken: () => {},
}

export const AppStateContext = createContext(initial)

// export default function App({ Component, pageProps }) {
//   return (
//     <ApolloProvider client={client}>
//       <Component {...pageProps} />
//     </ApolloProvider>
//   )
// }

export default function App({ Component, pageProps }) {
  // app state
  const [appState, setAppState] = useState({ loggedIn: false })

  const appSetLogin = (token) => {
    authToken = token
    setAppState({ ...appState, loggedIn: true })
  }

  const appSetLogout = () => {
    authToken = ''
    setAppState({ ...appState, loggedIn: false })
  }

  const appSetAuthToken = (token) => {
    authToken = token
  }
  const appClearAuthToken = () => {
    authToken = ''
  }
  const appGetAuthToken = () => {
    return authToken
  }

  // apollo client
  const cache = new InMemoryCache({})
  const requestLink = new ApolloLink(
    (operation, forward) =>
      new Observable((observer) => {
        let handle
        Promise.resolve(operation)
          .then((operation) => {
            operation.setContext({
              headers: { authorization: `Bearer ${appGetAuthToken()}` },
            })
          })
          .then(() => {
            handle = forward(operation).subscribe({
              next: observer.next.bind(observer),
              error: observer.error.bind(observer),
              complete: observer.complete.bind(observer),
            })
          })
          .catch(observer.error.bind(observer))
        return () => {
          if (handle) handle.unsubscribe()
        }
      })
  )

  const client = new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach(({ message, locations, path }) => {
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          })
        }
        if (networkError) {
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          )
        }
      }),
      requestLink,
      new HttpLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_SERVER,
        credentials: 'include',
      }),
    ]),
    cache,
  })

  return (
    <AppStateContext.Provider
      value={{
        appState,
        appSetLogin,
        appSetLogout,
        appSetAuthToken,
        appClearAuthToken,
      }}
    >
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AppStateContext.Provider>
  )
}
