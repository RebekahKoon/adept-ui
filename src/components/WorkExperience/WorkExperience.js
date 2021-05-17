import { useForm } from 'react-hook-form'
import '@fortawesome/fontawesome-free/js/fontawesome'
import Form from '../Form'
import { Input } from '../Input'
import {
  StyledWorkExperienceContainer,
  StyledWorkExperienceContent,
  StyledWorkExperience,
  StyledWorkExperienceText,
  StyledFormTextarea,
  StyledLabel,
} from './WorkExperienceStyle'

const WorkExperienceData = ({ workExperienceData }) => {
  return workExperienceData.map((workExperience) => (
    <StyledWorkExperience>
      <i className="fas fa-briefcase fa-3x"></i>
      <StyledWorkExperienceText>
        <b>{workExperience.company}</b>
        {workExperience.position}
        <small>
          {workExperience.startDate} -{' '}
          {workExperience.isCurrentPosition
            ? 'present'
            : workExperience.endDate}{' '}
          | {workExperience.city}, {workExperience.state}
        </small>
        {workExperience.description}
      </StyledWorkExperienceText>
    </StyledWorkExperience>
  ))
}

const FormInputFields = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  return (
    <>
      <Input
        {...register('name', { required: true })}
        type="text"
        placeholder="Google"
        id="name"
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
        // placeholder="2019"
        id="startDate"
        label="Start Date"
        isInvalid={errors.name}
      />
      <Input
        {...register('endDate', { required: false })}
        type="date"
        // placeholder="2021"
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
    </>
  )
}

const WorkExperience = ({ workExperienceData }) => {
  return (
    <StyledWorkExperienceContainer>
      <StyledWorkExperienceContent>
        <h2>Work Experience</h2>
        <WorkExperienceData workExperienceData={workExperienceData} />
      </StyledWorkExperienceContent>
      <Form inputFields={FormInputFields()} buttonText={'Add Work Experience'}>
        <FormInputFields />
      </Form>
    </StyledWorkExperienceContainer>
  )
}

export default WorkExperience
