import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { MainContentFlexContainer } from '../components/styles'
import SearchBar from '../components/SearchBar'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import Loader from 'react-loader-spinner'
import { CREATE_JOB_POSTING } from '../queries/postJob'
import Layout from '../components/Layout'
import { Input, RadioInput, InputWrapper } from '../components/Input'
import { StyledButtonSolid } from '../components/Button'
import { CenterContainer } from '../components/styles'
import { StyledFormTextarea } from '../components/WorkExperience'
import withSession from '../lib/session'
import useUser from '../lib/useUser'
// import SkillsSelect from '../components/SkillsSelect/SkillsSelect'
import { RequiredSkillsDropdown } from '../components/SkillDropdown'
import { RequiredSkill } from '../components/Skill'
import { StyledSkillList } from '../components/SkillList'

const Container = styled(MainContentFlexContainer)`
  padding: 3.75rem 1rem;
`

const PostJobButton = styled(StyledButtonSolid)`
  /* width: 100%; */
`

const FormContainer = styled.div`
  flex: 2;
  padding: 5rem;
  background-color: var(--white);
  border-radius: 0 5px 5px 0;
  box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.2);
  h2 {
    font-size: 1rem;
    margin: 0;
    padding-bottom: 1rem;
  }
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
  padding-bottom: 2.5rem;
  h2 {
    padding-bottom: 0;
  }
`

const RequiredSkillsSection = styled.section`
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
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  const [status, setStatus] = useState({ error: false, message: null })
  const [requiredSkills, setRequiredSkills] = useState([])

  const handleRemoveSkill = (skill) => {
    setRequiredSkills(requiredSkills.filter((s) => s.label !== skill))
  }

  const [createJobPosting, { loading, error }] = useMutation(
    CREATE_JOB_POSTING,
    {
      onCompleted({ createJobPosting }) {
        if (createJobPosting) {
          console.log(createJobPosting)
          setStatus({ ...status, message: 'Job posted successfully' })
        }
      },
      onError(e) {
        console.log(e)
        setStatus({ error: true, message: 'Error posting job' })
      },
    }
  )

  const { user } = useUser()

  const onSubmit = (data) => {
    setStatus({ error: false, message: '' })
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
      skillsRequired: requiredSkills.map((s) => s.name),
      postedBy: user.userId,
    }
    console.log(input)
    createJobPosting({ variables: input })
  }

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
        {/* Allow SkillsSelect to set this component's state */}
        <RequiredSkillsSection>
          <h2>Required Skills</h2>
          <TransitionGroup component={StyledSkillList}>
            {requiredSkills.map((requiredSkill) => (
              <CSSTransition
                key={requiredSkill.name}
                timeout={300}
                classNames="transition"
              >
                <RequiredSkill
                  name={requiredSkill.label}
                  handleRemove={handleRemoveSkill}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
          <RequiredSkillsDropdown
            requiredSkills={requiredSkills}
            setRequiredSkills={setRequiredSkills}
          />
        </RequiredSkillsSection>
        <h2>Description</h2>
        <StyledFormTextarea
          {...register('description', { required: true })}
          id="description"
          cols="50"
          rows="4"
          placeholder="yo what up"
        />
        {loading ? (
          <CenterContainer>
            <Loader type="TailSpin" color="#570EF1" height={26} width={26} />
          </CenterContainer>
        ) : (
          <PostJobButton type="submit">Post Job</PostJobButton>
        )}
        {status.message && (
          <p style={{ color: status.error ? 'red' : 'green' }}>
            {status.message}
          </p>
        )}
      </form>
    </FormContainer>
  )
}

const PostJobPage = (props) => {
  return (
    <Layout>
      <SearchBar headerText="Discover Jobs and Make Connections" />
      <Container>
        <FormImage />
        <PostJobForm />
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
