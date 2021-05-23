import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import Loader from 'react-loader-spinner'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import { ADD_EDUCATION_TO_RESUME } from '../../queries/addEducationToResume'
import { DELETE_EDUCATION } from '../../queries/deleteEducation'
import { GET_USER_BY_ID } from '../../queries/getUserById'
import Form from '../Form'
import { Input } from '../Input'
import {
  StyledEducationContainer,
  StyledEducationContent,
  StyledEducationGrid,
  StyledEducation,
  StyledEducationText,
  StyledRemoveButton,
  StyledAddEducationButton,
  StyledRemoveButtonContainer,
} from './EducationStyle'

const EducationData = ({
  userEducation,
  setUserEducation,
  userId,
  education,
}) => {
  const [deleteEducation, { loading, error }] = useMutation(DELETE_EDUCATION, {
    onCompleted({ deleteEducation }) {
      if (deleteEducation) {
        console.log(deleteEducation)
        setUserEducation(
          userEducation.filter(
            (education) => education.educationId !== deleteEducation
          )
        )
      }
    },
    onError(e) {
      console.log(e)
    },
    refetchQueries: [
      {
        query: GET_USER_BY_ID,
        variables: { userId: userId },
      },
    ],
    awaitRefetchQueries: true,
  })

  const handleDeleteEducation = (educationId) => {
    console.log(educationId)
    deleteEducation({
      variables: { educationId: educationId },
    })
  }

  return (
    <StyledEducation>
      <i className="fas fa-graduation-cap fa-3x"></i>
      <StyledEducationText>
        <b>{education.name}</b>
        {education.degree}
        <small>
          {new Date(education.startDate).getUTCFullYear()} -{' '}
          {new Date(education.endDate).getUTCFullYear()}
        </small>
        <small>{education.major}</small>
        <small>{education.gpa ? education.gpa.toFixed(1) : ''}</small>
      </StyledEducationText>
      <StyledRemoveButtonContainer>
        {loading ? (
          <Loader type="TailSpin" color="#570EF1" height={20} width={20} />
        ) : (
          <StyledRemoveButton
            id={education.educationId}
            onClick={() => handleDeleteEducation(education.educationId)}
          >
            <i className="fas fa-times"></i>
          </StyledRemoveButton>
        )}
      </StyledRemoveButtonContainer>
    </StyledEducation>
  )
}

const EducationForm = ({ userId, setUserEducation }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  const [addEducationToResume, { loading, error }] = useMutation(
    ADD_EDUCATION_TO_RESUME,
    {
      onCompleted({ addEducationToResume }) {
        if (addEducationToResume) {
          console.log(addEducationToResume)
          setUserEducation(addEducationToResume.resume.education)
        }
      },
      onError(e) {
        console.log(e)
      },
      refetchQueries: [
        {
          query: GET_USER_BY_ID,
          variables: { userId: userId },
        },
      ],
      awaitRefetchQueries: true,
    }
  )

  const onSubmit = (data) => {
    const input = {
      userId: userId,
      name: data.name,
      degree: data.degree,
      major: data.major,
      gpa: parseFloat(data.gpa),
      startDate: data.startDate,
      endDate: data.endDate,
    }

    console.log(input)
    addEducationToResume({ variables: input })
    reset()
  }

  const [formIsDisplayed, setFormIsDisplayed] = useState(false)
  const handleButtonClick = () => {
    formIsDisplayed === false
      ? setFormIsDisplayed(true)
      : setFormIsDisplayed(false)
    reset()
  }

  return (
    <>
      <StyledAddEducationButton
        onClick={handleButtonClick}
        style={{ display: formIsDisplayed ? 'none' : 'flex' }}
      >
        Add Education
      </StyledAddEducationButton>
      <form
        style={{ width: '100%', display: formIsDisplayed ? 'flex' : 'none' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form loading={loading} handleButtonClick={handleButtonClick}>
          <div>
            <Input
              {...register('name', { required: 'School name is required' })}
              type="text"
              placeholder="Enter school name"
              id="name"
              label={'School name'}
              isInvalid={errors.name}
            />
          </div>
          <div>
            <Input
              {...register('degree', { required: 'Degree type is required' })}
              type="text"
              placeholder="Enter your degree type"
              id="degree"
              label="Degree"
              isInvalid={errors.degree}
            />
          </div>
          <div>
            <Input
              {...register('major', { required: 'Major is required' })}
              type="text"
              placeholder="Computer Science"
              id="major"
              label="Major"
              isInvalid={errors.major}
            />
          </div>
          <div>
            <Input
              {...register('gpa', { required: false, max: 4.0, min: 0.0 })}
              type="number"
              placeholder="4.0"
              id="gpa"
              label="GPA"
              // isInvalid={errors.gpa.message}
            />
          </div>
          <div>
            <Input
              {...register('startDate', { required: 'Start date is required' })}
              type="date"
              id="startDate"
              name="startDate"
              label="Start Date"
              pattern="\d{4}-\d{2}-\d{2}"
              isInvalid={errors.startDate}
            />
          </div>
          <div>
            <Input
              {...register('endDate', { required: 'End date is required' })}
              type="date"
              id="endDate"
              name="endDate"
              label="End Date"
              pattern="\d{4}-\d{2}-\d{2}"
              isInvalid={errors.endDate}
            />
          </div>
        </Form>
      </form>
    </>
  )
}

const Education = ({ educationData, userId }) => {
  const [userEducation, setUserEducation] = useState(educationData)

  return (
    <StyledEducationContainer>
      <StyledEducationContent>
        <h2>Education</h2>
        <StyledEducationGrid>
          {userEducation.map((education) => (
            <EducationData
              userEducation={userEducation}
              setUserEducation={setUserEducation}
              userId={userId}
              education={education}
            />
          ))}
        </StyledEducationGrid>
      </StyledEducationContent>
      <EducationForm
        userId={userId}
        userEducation={userEducation}
        setUserEducation={setUserEducation}
      />
    </StyledEducationContainer>
  )
}

export default Education
