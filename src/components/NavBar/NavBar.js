import Link from 'next/link'
import router from 'next/router'
import StyledNavBar from './NavBarStyle.js'
import {
  StyledNavContainer,
  StyledNavLogo,
  StyledNavItems,
  StyledNavItem,
} from './NavBarStyle.js'
import MainContentContainer from '../styles/MainContentContainer'
import ButtonOutline from '../Button/ButtonOutline'
import useScrollFromTop from './useScrollFromTop'
import useUser from '../../lib/useUser'
import fetchJson from '../../lib/fetchJson.js'

const AuthedNavBar = (params) => {
  const { user, mutateUser } = useUser()
  return (
    <StyledNavContainer>
      <StyledNavLogo>
        <Link href="/">Adept</Link>
      </StyledNavLogo>

      <StyledNavItems>
        <StyledNavItem>
          <Link href="/dashboard">Dashboard</Link>
        </StyledNavItem>

        {user?.type === 'EMPLOYER' && (
          <>
            <StyledNavItem>
              <Link href="/post-job">Post Job</Link>
            </StyledNavItem>
            <StyledNavItem>
              <Link href="/postings">Your Postings</Link>
            </StyledNavItem>
          </>
        )}

        {user?.type === 'EMPLOYEE' && (
          <StyledNavItem>
            <Link href="/job-applications">Applications</Link>
          </StyledNavItem>
        )}

        <StyledNavItem>
          <ButtonOutline
            onClick={async (e) => {
              e.preventDefault()
              try {
                mutateUser(
                  await fetchJson('/api/logout', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                  }),
                  false
                )
                router.push('/login')
              } catch (err) {
                console.log(err)
              }
            }}
          >
            Log out
          </ButtonOutline>
        </StyledNavItem>
      </StyledNavItems>
    </StyledNavContainer>
  )
}

const UnauthedNavBar = (params) => {
  return (
    <StyledNavContainer>
      <StyledNavLogo>
        <Link href="/">Adept</Link>
      </StyledNavLogo>

      <StyledNavItems>
        <StyledNavItem>
          <Link href="/search-results?page=1">View jobs</Link>
        </StyledNavItem>

        <StyledNavItem>
          <Link href="/post-job">Sign in</Link>
        </StyledNavItem>

        <StyledNavItem>
          <ButtonOutline href="/register">Sign up</ButtonOutline>
        </StyledNavItem>
      </StyledNavItems>
    </StyledNavContainer>
  )
}

const NavBar = (props) => {
  const isTop = useScrollFromTop()
  const { user } = useUser()

  return (
    <StyledNavBar
      style={{
        backgroundColor: isTop
          ? 'rgba(87, 15, 241, 0)'
          : 'rgba(87, 15, 241, 1)',
      }}
    >
      <MainContentContainer>
        {user?.isLoggedIn ? <AuthedNavBar /> : <UnauthedNavBar />}
      </MainContentContainer>
    </StyledNavBar>
  )
}

export default NavBar
