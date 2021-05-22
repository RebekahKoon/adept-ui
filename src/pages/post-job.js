import styled from 'styled-components'
import { MainContentFlexContainer } from '../components/styles'
import SearchBar from '../components/SearchBar'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import Loader from 'react-loader-spinner'
import { CREATE_JOB_POSTING } from '../queries/postJob'
import Layout from '../components/Layout'
import { Input, RadioInput } from '../components/Input'
import { StyledButtonSolid } from '../components/Button'
import { CenterContainer } from '../components/styles'
import { StyledFormTextarea } from '../components/WorkExperience'
import withSession from '../lib/session'
import useUser from '../lib/useUser'

const Container = styled(MainContentFlexContainer)`
  padding: 3.75rem 1rem;
`

const PostJobButton = styled(StyledButtonSolid)`
  /* width: 100%; */
`

// const Container = styled.div`
//   margin: 0 auto;
//   display: flex;
//   box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.2);
// `

const FormContainer = styled.div`
  flex: 2;
  padding: 5rem;
  background-color: var(--white);
  border-radius: 0 5px 5px 0;
  box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.2);
`

const FormImage = styled.div`
  background-image: url('/feature03.jpeg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  flex: 1;
  min-height: 100%;
  border-radius: 5px 0 0 5px;
`

const FormHeaderStyles = styled.header`
  h1 {
    font-size: 1.5rem;
    margin: 0;
    padding-bottom: 2.5rem;
  }
  div {
    font-size: 0.875rem;
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

const FormRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const InputWrapper = styled.div`
  width: 100%;
  padding-right: 35px;
`

const FormHeader = () => {
  return (
    <FormHeaderStyles>
      <h1>Post Job Application</h1>
    </FormHeaderStyles>
  )
}

const JobType = {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  INTERNSHIP: 'INTERNSHIP',
}

const PostJobForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  // TODO: Make this the right query
  const [createJobPosting, { loading, error }] = useMutation(
    CREATE_JOB_POSTING,
    {
      onCompleted({ createJobPosting }) {
        if (createJobPosting) {
          console.log(createJobPosting)
          // call login user
          // store returned token in local storage
          // redirect to dashboard now that has been token obtained
        }
      },
      onError(e) {
        console.log(e)
      },
    }
  )

  const { user } = useUser()

  const onSubmit = (data) => {
    const input = {
      positionTitle: data.positionTitle,
      company: data.company,
      datePosted: new Date(Date.now()).toISOString(),
      city: data.location,
      // state: data.state,
      salary: Number(data.salary),
      type: data.type,
      description: data.description,
      // TODO: change this to form data
      skillsRequired: [
        '1df44942-5ea1-4d96-a1a1-4f4d5ac89330',
        '7e9921db-3d7d-4ad2-a6c7-b9a429c1bdac',
      ],
      postedBy: user.userId,
    }
    console.log(input)
    createJobPosting({ variables: input })
  }

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  return (
    <FormContainer>
      <FormHeader />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <InputWrapper>
            <Input
              {...register('positionTitle', { required: true })}
              type="text"
              placeholder="job title"
              id="positionTitle"
              label="Job Title"
              isInvalid={errors.positionTitle}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              {...register('company', { required: true })}
              type="text"
              placeholder="facegoogazon"
              id="company"
              label="Company"
              isInvalid={errors.company}
            />
          </InputWrapper>
        </FormRow>
        <FormRow>
          <InputWrapper>
            <Input
              {...register('location', { required: true })}
              placeholder="a place"
              type="text"
              id="location"
              label="Location"
              isInvalid={errors.location}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              {...register('salary', { required: true })}
              placeholder="100"
              type="number"
              id="salary"
              label="Salary"
              isInvalid={errors.salary}
            />
          </InputWrapper>
        </FormRow>
        <RadioInputsSection>
          <h2>Job Type</h2>
          <RadioInputs>
            <RadioInput
              {...register('type')}
              defaultChecked
              type="radio"
              id="employee"
              label="Full Time"
              value={JobType.FULL_TIME}
            />
            <RadioInput
              {...register('type')}
              type="radio"
              id="employer"
              label="Part Time"
              value={JobType.PART_TIME}
            />
            <RadioInput
              {...register('type')}
              type="radio"
              id="internship"
              label="Internship"
              value={JobType.INTERNSHIP}
            />
          </RadioInputs>
        </RadioInputsSection>
        <StyledFormTextarea
          {...register('description', { required: true })}
          id="description"
          cols="50"
          rows="4"
          placeholder="yo what up"
        ></StyledFormTextarea>
        {/* <Input
          {...register('description', { required: true })}
          type="textarea"
          id="description"
          label="Description"
          isInvalid={errors.description}
        /> */}
        {loading ? (
          <CenterContainer>
            <Loader type="TailSpin" color="#570EF1" height={26} width={26} />
          </CenterContainer>
        ) : (
          <PostJobButton type="submit">Post Job</PostJobButton>
        )}
        <p>{error && error.message}</p>
      </form>
    </FormContainer>
  )
}

const PostJobPage = (props) => {
  return (
    <Layout>
      <SearchBar headerText="Discover Jobs and Make Connections" />
      <Container>
        {/* <Container> */}
        <FormImage />
        <PostJobForm />
        {/* </Container> */}
      </Container>
    </Layout>
  )
}

export default PostJobPage

// Redirect if user is not logged in
export const getServerSideProps = withSession(async ({ req, res }) => {
  const user = req.session.get('user')

  if (user === undefined) {
    res.setHeader('location', '/login')
    res.statusCode = 302
    return res.end()
  }
  return { props: {} }
})
