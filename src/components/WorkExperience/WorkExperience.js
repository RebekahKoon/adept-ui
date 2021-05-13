import '@fortawesome/fontawesome-free/js/fontawesome'
import Form from '../Form'
import { Input } from '../Input'
import {
  StyledWorkExperienceContainer,
  StyledWorkExperienceContent,
  StyledWorkExperience,
  StyledWorkExperienceText,
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
        placeholder="Oregon State University"
        id="name"
        label="School name"
        // isInvalid={errors.name}
      />
      <Input
        // {...register('name', { required: true })}
        type="text"
        placeholder="Bachelor of Science"
        id="degree"
        label="Degree"
        // isInvalid={errors.name}
      />
      <Input
        // {...register('name', { required: true })}
        type="text"
        placeholder="Computer Science"
        id="major"
        label="Major"
        // isInvalid={errors.name}
      />
      <Input
        // {...register('name', { required: true })}
        type="text"
        placeholder="4.0"
        id="gpa"
        label="GPA"
        // isInvalid={errors.name}
      />
      <Input
        // {...register('name', { required: true })}
        type="text"
        placeholder="2019"
        id="startDate"
        label="Start Date"
        // isInvalid={errors.name}
      />
      <Input
        // {...register('name', { required: true })}
        type="text"
        placeholder="2021"
        id="endDate"
        label="End Date"
        // isInvalid={errors.name}
      />
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
