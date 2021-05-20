import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import '@fortawesome/fontawesome-free/js/fontawesome'
import { ADD_WORK_EXPERIENCE_TO_RESUME } from '../../queries/addWorkExperienceToResume'
import { DELETE_WORK_EXPERIENCE } from '../../queries/deleteWorkExperience'
import Form from '../Form'
import { Input } from '../Input'
import {
  StyledWorkExperienceContainer,
  StyledWorkExperienceContent,
  StyledWorkExperience,
  StyledWorkExperienceText,
  StyledFormTextarea,
  StyledLabel,
  StyledRemoveButton,
} from './WorkExperienceStyle'

const WorkExperienceData = ({ userWorkExperience, setUserWorkExperience }) => {
  const [deleteWorkExperience, { loading, error }] = useMutation(
    DELETE_WORK_EXPERIENCE,
    {
      onCompleted({ deleteWorkExperience }) {
        console.log(deleteWorkExperience)
        setUserWorkExperience(
          userWorkExperience.filter(
            (workExperience) =>
              workExperience.workExpId !== deleteWorkExperience
          )
        )
      },
      onError(e) {
        console.log(e)
      },
    }
  )

  const handleDeleteWorkExperience = (workExpId) => {
    console.log(workExpId)
    deleteWorkExperience({ variables: { workExpId: workExpId } })
  }

  return userWorkExperience.map((workExperience) => (
    <StyledWorkExperience>
      <i className="fas fa-briefcase fa-3x"></i>
      <StyledWorkExperienceText>
        <b>{workExperience.company}</b>
        {workExperience.position}
        <small>
          {new Date(workExperience.startDate).getUTCFullYear()} -{' '}
          {workExperience.isCurrentPosition
            ? 'present'
            : new Date(workExperience.endDate).getUTCFullYear()}{' '}
          | {workExperience.city}, {workExperience.state}
        </small>
        {workExperience.description}
      </StyledWorkExperienceText>
      <StyledRemoveButton
        id={workExperience.workExpId}
        onClick={() => handleDeleteWorkExperience(workExperience.workExpId)}
      >
        <i className="fas fa-times"></i>
      </StyledRemoveButton>
    </StyledWorkExperience>
  ))
}

const FormInputFields = ({ userId, setUserWorkExperience }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  const [addWorkExperienceToResume, { loading, error }] = useMutation(
    ADD_WORK_EXPERIENCE_TO_RESUME,
    {
      onCompleted({ addWorkExperienceToResume }) {
        if (addWorkExperienceToResume) {
          console.log(addWorkExperienceToResume)
          setUserWorkExperience(addWorkExperienceToResume.resume.workExperience)
        }
      },
      onError(e) {
        console.log(e)
      },
    }
  )

  const onSubmit = (data) => {
    const input = {
      userId: userId,
      company: data.company,
      position: data.position,
      city: data.city,
      state: data.state,
      isCurrentPosition: data.endDate ? false : true,
      startDate: data.startDate,
      endDate: data.endDate,
      description: data.description,
    }

    console.log(input)
    addWorkExperienceToResume({ variables: input })
  }

  return (
    <>
      <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
        <Form buttonText={'Add Work Experience'}>
          <Input
            {...register('company', { required: true })}
            type="text"
            placeholder="Google"
            id="company"
            label="Company name"
            isInvalid={errors.name}
          />
          <Input
            {...register('position', { required: true })}
            type="text"
            placeholder="Software Developer"
            id="position"
            label="Position"
            isInvalid={errors.name}
          />
          <Input
            {...register('city', { required: false })}
            type="text"
            placeholder="Seattle"
            id="city"
            label="City"
            isInvalid={errors.name}
          />
          <Input
            {...register('state', { required: false })}
            type="text"
            placeholder="WA"
            id="state"
            label="State"
            isInvalid={errors.name}
          />
          <Input
            {...register('startDate', { required: true })}
            type="date"
            id="startDate"
            label="Start Date"
            isInvalid={errors.name}
          />
          <Input
            {...register('endDate', { required: false })}
            type="date"
            id="endDate"
            label="End Date (If Applicable)"
            isInvalid={errors.name}
          />
          <div>
            <StyledLabel htmlFor="description">Description</StyledLabel>
            <br />
            <StyledFormTextarea
              {...register('description', { required: true })}
              id="description"
              cols="50"
              rows="4"
              isInvalid={errors.name}
            ></StyledFormTextarea>
          </div>
        </Form>
      </form>
    </>
  )
}

const WorkExperience = ({ workExperienceData, userId }) => {
  const [userWorkExperience, setUserWorkExperience] = useState(
    workExperienceData
  )

  return (
    <StyledWorkExperienceContainer>
      <StyledWorkExperienceContent>
        <h2>Work Experience</h2>
        <WorkExperienceData
          userWorkExperience={userWorkExperience}
          setUserWorkExperience={setUserWorkExperience}
        />
      </StyledWorkExperienceContent>
      <FormInputFields
        userId={userId}
        setUserWorkExperience={setUserWorkExperience}
      />
    </StyledWorkExperienceContainer>
  )
}

export default WorkExperience
