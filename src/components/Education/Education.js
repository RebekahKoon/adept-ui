import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import { ADD_EDUCATION_TO_RESUME } from '../../queries/addEducationToResume'
import { DELETE_EDUCATION } from '../../queries/deleteEducation'
import Form from '../Form'
import { Input } from '../Input'
import {
  StyledEducationContainer,
  StyledEducationContent,
  StyledEducationGrid,
  StyledEducation,
  StyledEducationText,
  StyledRemoveButton,
} from './EducationStyle'

const EducationData = ({ userEducation, setUserEducation }) => {
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
  })

  const handleDeleteEducation = (educationId) => {
    console.log(educationId)
    deleteEducation({
      variables: { educationId: educationId },
    })
  }

  return userEducation.map((education) => (
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
      <StyledRemoveButton
        id={education.educationId}
        onClick={() => handleDeleteEducation(education.educationId)}
      >
        <i className="fas fa-times"></i>
      </StyledRemoveButton>
    </StyledEducation>
  ))
}

const FormInputFields = ({ userId, setUserEducation }) => {
  const [buttonPressed, setButtonIsPressed] = useState(false)
  const handleButtonPress = () => {
    buttonPressed === false ? true : false
  }

  const {
    register,
    handleSubmit,
    watch,
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
    }
  )

  const onSubmit = (data) => {
    setButtonIsPressed(true)
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
  }

  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
      <Form buttonText={'Add Education'}>
        <div>
          <Input
            {...register('name', { required: 'School name is required' })}
            type="text"
            placeholder="Enter school name"
            id="name"
            label={'School name'}
            isInvalid={errors.name}
          />
          {errors.name && errors.name.message}
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
          {errors.degree && <span>{errors.degree.message}</span>}
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
          {errors.major && <span>{errors.major.message}</span>}
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
          {/* {errors.gpa && <span>{errors.gpa.message}</span>} */}
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
          {errors.startDate && <span>{errors.startDate.message}</span>}
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
          {errors.endDate && <span>{errors.endDate.message}</span>}
        </div>
      </Form>
    </form>
  )
}

const Education = ({ educationData, userId }) => {
  const [userEducation, setUserEducation] = useState(educationData)

  return (
    <StyledEducationContainer>
      <StyledEducationContent>
        <h2>Education</h2>
        <StyledEducationGrid>
          <EducationData
            userEducation={userEducation}
            setUserEducation={setUserEducation}
          />
        </StyledEducationGrid>
      </StyledEducationContent>
      <FormInputFields
        userId={userId}
        userEducation={userEducation}
        setUserEducation={setUserEducation}
      />
    </StyledEducationContainer>
  )
}

export default Education
