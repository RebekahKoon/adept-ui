import styled from 'styled-components'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import Loader from 'react-loader-spinner'
import Link from 'next/link'
import { REGISTER_USER } from '../queries/register'
import Layout from '../components/Layout'
import { Input, RadioInput } from '../components/Input'
import { StyledButtonSolid } from '../components/Button'
import { CenterContainer } from '../components/styles'
import useUser from '../lib/useUser'
import withSession from '../lib/session'
import fetchJson from '../lib/fetchJson'

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
  background-image: url('/feature01.png');
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

const RadioInputsSection = styled.section`
  h2 {
    font-size: 1rem;
    margin: 0;
  }
  padding-bottom: 2.5rem;
`

const RadioInputs = styled.div`
  display: flex;
  div {
    width: 50%;
  }
`

const FormHeader = () => {
  return (
    <FormHeaderStyles>
      <div>Adept</div>
      <h1>Create an Account</h1>
    </FormHeaderStyles>
  )
}

const FormFooter = () => {
  return (
    <FormFooterStyles>
      <div>
        Already have an account? <Link href="/login">Sign in</Link>
      </div>
      <div>
        <a>Forgot Password?</a>
      </div>
    </FormFooterStyles>
  )
}

const UserType = {
  EMPLOYEE: 'EMPLOYEE',
  EMPLOYER: 'EMPLOYER',
}

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  // Redirect to dashboard after user logs in
  const { user, mutateUser } = useUser({
    redirectTo: '/dashboard',
    redirectIfFound: true,
  })
  const [isLoginLoading, setIsLoginLoading] = useState(false)

  const [registerUser, { loading, error }] = useMutation(REGISTER_USER, {
    onCompleted({ registerUser }) {
      if (registerUser) {
        // console.log(registerUser)
      }
    },
    onError(err) {
      throw err
    },
  })

  const url =
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_PROD_ENDPOINT
      : 'http://localhost:3000'

  const onSubmit = async (data) => {
    const PASSWORD_MISMATCH = 'Password does not match'
    const UNIQUE_CONSTRAINT = 'unique'
    const input = {
      name: data.name,
      email: data.email,
      password: data.password,
      type: data.type,
    }
    try {
      if (data.password !== data.confirmPassword) {
        throw new Error(PASSWORD_MISMATCH)
      }
      await registerUser({ variables: input })
      const body = {
        email: data.email,
        password: data.password,
      }
      setIsLoginLoading(true)
      await mutateUser(
        fetchJson(`${url}/api/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
      )
    } catch (err) {
      if (err.message.includes(UNIQUE_CONSTRAINT)) {
        console.log('UNIQUE')
        setError('email', {
          type: 'manual',
          message: 'Email unavailable',
        })
      }
      if (err.message.includes(PASSWORD_MISMATCH)) {
        console.log('PASSWORDS')
        setError('password', {
          type: 'manual',
        })
        setError('confirmPassword', {
          type: 'manual',
        })
      }
    }
    setIsLoginLoading(false)
  }

  return (
    <FormContainer>
      <FormHeader />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('name', {
            required: { value: true, message: 'Name required' },
          })}
          type="text"
          placeholder="Michael Scott"
          id="name"
          label="Name"
          isInvalid={errors.name}
        />
        <Input
          {...register('email', {
            required: { value: true, message: 'Email required' },
          })}
          type="email"
          placeholder="hello@adept.com"
          id="email"
          label="Email"
          isInvalid={errors.email}
        />
        <Input
          {...register('password', {
            required: { value: true, message: 'Password required' },
          })}
          placeholder="Password"
          type="password"
          id="password"
          label="Password"
          isInvalid={errors.password}
        />
        <Input
          {...register('confirmPassword', {
            required: { value: true, message: 'Confirm Password required' },
          })}
          placeholder="Confirm Password"
          type="password"
          id="confirmPassword"
          label="Confirm Password"
          isInvalid={errors.confirmPassword}
        />
        <RadioInputsSection>
          <h2>I am:</h2>
          <RadioInputs>
            <RadioInput
              {...register('type')}
              defaultChecked
              type="radio"
              id="employee"
              label="A Job Applicant"
              value={UserType.EMPLOYEE}
            />
            <RadioInput
              {...register('type')}
              type="radio"
              id="employer"
              label="An Employer"
              value={UserType.EMPLOYER}
            />
          </RadioInputs>
        </RadioInputsSection>
        {loading || isLoginLoading || user?.isLoggedIn ? (
          <CenterContainer>
            <Loader type="TailSpin" color="#570EF1" height={26} width={26} />
          </CenterContainer>
        ) : (
          <RegisterButton type="submit">Register</RegisterButton>
        )}
        <FormFooter />
      </form>
    </FormContainer>
  )
}

const Register = (props) => {
  return (
    <Layout hasNav={false} hasFooter={false}>
      <Gradient>
        <Container>
          <RegisterForm />
          <FormImage />
        </Container>
      </Gradient>
    </Layout>
  )
}

export default Register

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
