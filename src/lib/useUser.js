import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

/**
 * Hook that gives access to the currently logged in user.
 * Allows for optional redirect.
 *
 * @param {object} options Optional redirect options
 * @returns {object} The current user based on the stored session cookie
 */
export default function useUser({
  redirectTo = false,
  redirectIfFound = false,
} = {}) {
  const { data: user, mutate: mutateUser } = useSWR('/api/user', fetcher)

  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !user) return

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.isLoggedIn)
    ) {
      Router.push(redirectTo)
    }
  }, [user, redirectIfFound, redirectTo])

  return { user, mutateUser }
}
