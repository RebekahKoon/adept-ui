import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../queries/login'
import Layout from '../components/Layout'
import { Input } from '../components/Input'
import { StyledButtonSolid } from '../components/Button'

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
        Don't have an account? <a>Register</a>
      </div>
      <div>
        <a>Forgot Password?</a>
      </div>
    </FormFooterStyles>
  )
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ loginUser }) {
      if (loginUser) {
        console.log(loginUser)
      }
    },
    onError(e) {
      console.log(e)
    },
  })

  const onSubmit = (data) => {
    // console.log(data)
    loginUser({ variables: data })
  }

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

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

        <RegisterButton type="submit">Sign In</RegisterButton>
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
