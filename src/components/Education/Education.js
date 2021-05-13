import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import Form from '../Form'
import { Input } from '../Input'
import {
  StyledEducationContainer,
  StyledEducationContent,
  StyledEducationGrid,
  StyledEducation,
  StyledEducationText,
} from './EducationStyle'

const EducationData = ({ educationData }) => {
  return educationData.map((education) => (
    <StyledEducation>
      <i className="fas fa-graduation-cap fa-3x"></i>
      <StyledEducationText>
        <b>{education.name}</b>
        {education.degree}
        <small>
          {education.startDate} - {education.endDate}
        </small>
        <small>{education.major}</small>
        <small>{education.gpa.toFixed(1)}</small>
      </StyledEducationText>
    </StyledEducation>
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

const Education = ({ educationData }) => {
  // const [formIsDisplayed, setFormIsDisplayed] = useState(false)
  // const handleAddSchool = () => {
  //   console.log('hi')
  //   setFormIsDisplayed(true)
  //   console.log(formIsDisplayed)
  // }

  return (
    <StyledEducationContainer>
      <StyledEducationContent>
        <h2>Education</h2>
        <StyledEducationGrid>
          <EducationData educationData={educationData} />
        </StyledEducationGrid>
      </StyledEducationContent>
      <Form inputFields={FormInputFields()} buttonText={'Add Education'} />
    </StyledEducationContainer>
  )
}

export default Education
