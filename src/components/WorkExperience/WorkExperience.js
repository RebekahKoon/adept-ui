import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import Loader from 'react-loader-spinner'
import '@fortawesome/fontawesome-free/js/fontawesome'
import { ADD_WORK_EXPERIENCE_TO_RESUME } from '../../queries/addWorkExperienceToResume'
import { DELETE_WORK_EXPERIENCE } from '../../queries/deleteWorkExperience'
import { GET_USER_BY_ID } from '../../queries/getUserById'
import Form from '../Form'
import { Input, Label } from '../Input'
import { StyledSkillDropdown } from '../SkillDropdown'
import states from '../../utils/states'
import {
  StyledWorkExperienceContainer,
  StyledWorkExperienceContent,
  StyledWorkExperience,
  StyledWorkExperienceText,
  StyledFormTextarea,
  StyledLabel,
  StyledRemoveButton,
  StyledAddWorkExperienceButton,
  StyledRemoveButtonContainer,
} from './WorkExperienceStyle'

const WorkExperienceData = ({
  userWorkExperience,
  setUserWorkExperience,
  setCurrentUserPosition,
  workExperience,
  userId,
}) => {
  const [deleteWorkExperience, { loading, error }] = useMutation(
    DELETE_WORK_EXPERIENCE,
    {
      onCompleted({ deleteWorkExperience }) {
        setUserWorkExperience(
          userWorkExperience.filter(
            (workExperience) =>
              workExperience.workExpId !== deleteWorkExperience
          )
        )

        setCurrentUserPosition(
          userWorkExperience.filter(
            (workExperience) =>
              !workExperience.endDate &&
              workExperience.workExpId !== deleteWorkExperience
          )
        )
      },
      onError(e) {
        console.log(e)
      },
      refetchQueries: () => [
        {
          query: GET_USER_BY_ID,
          variables: { userId },
          fetchPolicy: 'network-only',
        },
      ],
      awaitRefetchQueries: true,
      partialRefetch: true,
    }
  )

  const handleDeleteWorkExperience = (workExpId) => {
    deleteWorkExperience({ variables: { workExpId: workExpId } })
  }

  return (
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
      <StyledRemoveButtonContainer>
        {loading ? (
          <Loader type="TailSpin" color="#570EF1" height={20} width={20} />
        ) : (
          <StyledRemoveButton
            id={workExperience.workExpId}
            onClick={() => handleDeleteWorkExperience(workExperience.workExpId)}
          >
            <i className="fas fa-times"></i>
          </StyledRemoveButton>
        )}
      </StyledRemoveButtonContainer>
    </StyledWorkExperience>
  )
}

const FormInputFields = ({
  userId,
  setUserWorkExperience,
  setCurrentUserPosition,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  const [endDateError, setEndDateError] = useState()

  const [addWorkExperienceToResume, { loading, error }] = useMutation(
    ADD_WORK_EXPERIENCE_TO_RESUME,
    {
      onCompleted({ addWorkExperienceToResume }) {
        if (addWorkExperienceToResume) {
          setUserWorkExperience(addWorkExperienceToResume.resume.workExperience)

          setCurrentUserPosition(
            addWorkExperienceToResume.resume.workExperience.filter(
              (workExperience) => !workExperience.endDate
            )
          )
        }
      },
      onError(e) {
        console.log(e)
      },
      refetchQueries: () => [
        {
          query: GET_USER_BY_ID,
          variables: { userId },
          fetchPolicy: 'network-only',
        },
      ],
      awaitRefetchQueries: true,
      partialRefetch: true,
    }
  )

  const onSubmit = (data) => {
    const input = {
      userId: userId,
      company: data.company,
      position: data.position,
      city: data.city,
      state: data.state.value,
      isCurrentPosition: data.endDate ? false : true,
      startDate: data.startDate,
      endDate: data.endDate,
      description: data.description,
    }

    if (data.endDate && data.endDate < data.startDate) {
      setEndDateError({ message: 'End date must be greater than start date' })
    } else {
      setEndDateError()
      addWorkExperienceToResume({ variables: input })
      reset()
    }
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
      <StyledAddWorkExperienceButton
        onClick={handleButtonClick}
        style={{ display: formIsDisplayed ? 'none' : 'flex' }}
      >
        Add Work Experience
      </StyledAddWorkExperienceButton>
      <form
        style={{ width: '100%', display: formIsDisplayed ? 'flex' : 'none' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form loading={loading} handleButtonClick={handleButtonClick}>
          <Input
            {...register('company', { required: 'Company name is required' })}
            type="text"
            placeholder="Google"
            id="company"
            label="Company name"
            isInvalid={errors.company}
          />
          <Input
            {...register('position', {
              required: 'Position title is required',
            })}
            type="text"
            placeholder="Software Developer"
            id="position"
            label="Position title"
            isInvalid={errors.position}
          />
          <Input
            {...register('city', { required: false })}
            type="text"
            placeholder="Seattle"
            id="city"
            label="City"
            isInvalid={errors.city}
          />
          <section>
            <StyledLabel htmlFor="state"> State</StyledLabel>
            <Controller
              name="state"
              isClearable
              control={control}
              rules={{ required: false }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={states}
                  styles={StyledSkillDropdown}
                />
              )}
            />
          </section>
          <Input
            {...register('startDate', { required: 'Start date is required' })}
            type="date"
            id="startDate"
            label="Start Date"
            isInvalid={errors.startDate}
          />
          <Input
            {...register('endDate', { required: false })}
            type="date"
            id="endDate"
            label="End Date (If Applicable)"
            isInvalid={endDateError}
          />
          <div>
            <StyledLabel
              htmlFor="description"
              style={{ color: errors.description?.message && 'red' }}
            >
              {errors.description?.message
                ? errors.description.message
                : 'Description'}
            </StyledLabel>
            <br />
            <StyledFormTextarea
              {...register('description', {
                required: 'Description is required',
              })}
              id="description"
              cols="50"
              rows="4"
              isInvalid={errors.description}
            ></StyledFormTextarea>
          </div>
        </Form>
      </form>
    </>
  )
}

const WorkExperience = ({
  userWorkExperience,
  setUserWorkExperience,
  userId,
  setCurrentUserPosition,
}) => {
  return (
    <StyledWorkExperienceContainer>
      <StyledWorkExperienceContent>
        <h2>Work Experience</h2>
        {userWorkExperience.map((workExperience) => (
          <WorkExperienceData
            key={workExperience.workExpId}
            userWorkExperience={userWorkExperience}
            setUserWorkExperience={setUserWorkExperience}
            setCurrentUserPosition={setCurrentUserPosition}
            workExperience={workExperience}
            userId={userId}
          />
        ))}
      </StyledWorkExperienceContent>
      <FormInputFields
        userId={userId}
        setUserWorkExperience={setUserWorkExperience}
        setCurrentUserPosition={setCurrentUserPosition}
      />
    </StyledWorkExperienceContainer>
  )
}

export default WorkExperience
