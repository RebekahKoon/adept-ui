import styled from 'styled-components'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import Layout from '../components/Layout'
import { Input } from '../components/Input'
import { StyledButtonSolid } from '../components/Button'
import { CenterContainer } from '../components/styles'
import fetchJson from '../lib/fetchJson'
import useUser from '../lib/useUser'
import withSession from '../lib/session'

const RegisterButton = styled(StyledButtonSolid)`
  width: 100%;
`

const Container = styled.div`
  margin: 0 auto;
  width: 1000px;
  display: flex;
  box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.2);
`

const FormContainer = styled.div`
  padding: 5rem;
  width: 50%;
  background-color: var(--white);
  border-radius: 5px 0 0 5px;
`

const Gradient = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(#b472b1, #8e7de1);
  padding: 5rem;
`

const FormImage = styled.div`
  background-image: url('/feature02.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 50%;
  min-height: 100%;
  border-radius: 0 5px 5px 0;
`

const FormHeaderStyles = styled.header`
  h1 {
    font-size: 1.5rem;
    margin: 0;
    padding: 2.5rem 0;
  }
  div {
    font-size: 0.875rem;
  }
`

const FormFooterStyles = styled.footer`
  color: var(--lightGray);
  padding: 1rem 0;
  font-size: 0.75rem;
  line-height: 1.125rem;
  a {
    color: var(--purple);
  }
`

const FormHeader = () => {
  return (
    <FormHeaderStyles>
      <div>Adept</div>
      <h1>Login</h1>
    </FormHeaderStyles>
  )
}

const FormFooter = () => {
  return (
    <FormFooterStyles>
      <div>
        Don't have an account? <Link href="/register">Register</Link>
      </div>
      <div>
        <a>Forgot Password?</a>
      </div>
    </FormFooterStyles>
  )
}

const LoginForm = () => {
  // Redirect to dashboard after user logs in
  const { user, mutateUser } = useUser({
    redirectTo: '/dashboard',
    redirectIfFound: true,
  })
  const [isLoading, setIsLoading] = useState(false)

  const url =
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_PROD_ENDPOINT
      : 'http://localhost:3000'

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  // Delegate login to /api/login to set session cookies
  const onSubmit = async (data) => {
    const INVALID_USER_MSG = 'That user does not exist'
    const INVALID_PASSWORD_MSG = 'Invalid password'
    const body = {
      email: data.email,
      password: data.password,
    }
    setIsLoading(true)
    try {
      await mutateUser(
        fetchJson(`${url}/api/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
      )
    } catch (err) {
      if (err.message.includes(INVALID_USER_MSG)) {
        setError('email', {
          type: 'manual',
          message: 'Email not found',
        })
      }
      if (err.message.includes(INVALID_PASSWORD_MSG)) {
        setError('password', {
          type: 'manual',
          message: 'Password incorrect',
        })
      }
    }
    setIsLoading(false)
  }

  return (
    <FormContainer>
      <FormHeader />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email', { required: true })}
          type="email"
          placeholder="hello@adept.com"
          id="email"
          label="Email"
          isInvalid={errors.email}
        />
        <Input
          {...register('password', { required: true })}
          placeholder="password"
          type="password"
          id="password"
          label="Password"
          isInvalid={errors.password}
        />

        {isLoading || user?.isLoggedIn ? (
          <CenterContainer>
            <Loader type="TailSpin" color="#570EF1" height={26} width={26} />
          </CenterContainer>
        ) : (
          <RegisterButton type="submit">Sign In</RegisterButton>
        )}
        <FormFooter />
      </form>
    </FormContainer>
  )
}

const Login = (props) => {
  return (
    <Layout hasNav={false} hasFooter={false}>
      <Gradient>
        <Container>
          <LoginForm />
          <FormImage />
        </Container>
      </Gradient>
    </Layout>
  )
}

export default Login

// Redirect if the user is already logged in
export const getServerSideProps = withSession(async ({ req, res }) => {
  const user = req.session.get('user')

  if (user) {
    res.setHeader('location', '/dashboard')
    res.statusCode = 302
    return res.end()
  }
  return { props: {} }
})
