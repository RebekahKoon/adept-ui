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
  return (
    <>
      <Input
        // {...register('name', { required: true })}
        type="text"
        placeholder="Google"
        id="name"
        label="Company name"
        // isInvalid={errors.name}
      />
      <Input
        // {...register('name', { required: true })}
        type="text"
        placeholder="Software Developer"
        id="position"
        label="Position"
        // isInvalid={errors.name}
      />
      <Input
        // {...register('name', { required: true })}
        type="text"
        placeholder="Seattle"
        id="city"
        label="City"
        // isInvalid={errors.name}
      />
      <Input
        // {...register('name', { required: true })}
        type="text"
        placeholder="WA"
        id="state"
        label="State"
        // isInvalid={errors.name}
      />
      <Input
        // {...register('name', { required: true })}
        type="date"
        // placeholder="2019"
        id="startDate"
        label="Start Date"
        // isInvalid={errors.name}
      />
      <Input
        // {...register('name', { required: true })}
        type="date"
        // placeholder="2021"
        id="endDate"
        label="End Date (If Applicable)"
        // isInvalid={errors.name}
      />
      <div>
        <StyledLabel htmlFor="description">Description</StyledLabel>
        <br />
        <StyledFormTextarea
          id="description"
          cols="50"
          rows="4"
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
      <Form
        inputFields={FormInputFields()}
        buttonText={'Add Work Experience'}
      />
    </StyledWorkExperienceContainer>
  )
}

export default WorkExperience
