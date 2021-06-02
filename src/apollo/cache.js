import { InMemoryCache, Reference } from '@apollo/client'

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        devices: {
          merge(existing = {}, incoming) {
            return { ...existing, ...incoming }
          },
        },
      },
    },
  },
})
