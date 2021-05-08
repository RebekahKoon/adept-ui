import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { gql, useMutation } from '@apollo/client'
import { REGISTER_USER } from '../queries/register'
import Layout from '../components/Layout'
import { Input, RadioInput } from '../components/Input'
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
        Already have an account? <a>Sign in</a>
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
    watch,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  const onSubmit = (data) => {
    const input = {
      name: 'a user',
      email: 'ausersemail@a.a',
      password: 'abc',
      type: UserType.EMPLOYEE,
    }
    registerUser({ variables: input })
  }

  const [registerUser, { loading, error }] = useMutation(REGISTER_USER, {
    onCompleted({ registerUser }) {
      if (registerUser) {
        console.log(registerUser)
      }
    },
    onError(e) {
      console.log(e)
    },
  })

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  return (
    <FormContainer>
      <FormHeader />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('name', { required: true })}
          type="text"
          placeholder="john doe"
          id="name"
          label="Name"
          isInvalid={errors.name}
        />
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
        <Input
          {...register('confirmPassword', { required: true })}
          placeholder="password"
          type="password"
          id="confirmPassword"
          label="Confirm Password"
          isInvalid={errors.confirmPassword}
        />
        <RadioInputsSection>
          <h2>I am:</h2>
          <RadioInputs>
            <RadioInput
              {...register('userType')}
              defaultChecked
              type="radio"
              id="employee"
              label="A Job Applicant"
              value="EMPLOYEE"
            />
            <RadioInput
              {...register('userType')}
              type="radio"
              id="employer"
              label="An Employer"
              value="EMPLOYER"
            />
          </RadioInputs>
        </RadioInputsSection>
        <RegisterButton type="submit">Register</RegisterButton>
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
