import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import { ADD_EDUCATION_TO_RESUME } from '../../queries/addEducationToResume'
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
          {new Date(education.startDate).getUTCFullYear()} -{' '}
          {new Date(education.endDate).getUTCFullYear()}
        </small>
        <small>{education.major}</small>
        <small>{education.gpa ? education.gpa.toFixed(1) : ''}</small>
      </StyledEducationText>
    </StyledEducation>
  ))
}

const FormInputFields = ({ userId }) => {
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
      name: data.name,
      degree: data.degree,
      major: data.major,
      gpa: parseFloat(data.gpa),
      startDate: data.startDate,
      endDate: data.endDate,
    }
    // const input = {
    //   userId: '10737552-9018-497d-8e7a-064f99e8eeaa',
    //   name: 'test',
    //   degree: 'test',
    //   major: 'test',
    //   gpa: 4.0,
    //   startDate: '2019-4-20',
    //   endDate: '2021-6-10',
    // }
    addEducationToResume({ variables: input })
  }

  return (
    <>
      <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
        <Form
          // inputFields={FormInputFields()}
          buttonText={'Add Education'}
        >
          <Input
            {...register('name', { required: true })}
            type="text"
            placeholder="Oregon State University"
            id="name"
            label="School name"
            isInvalid={errors.name}
          />
          <Input
            {...register('degree', { required: true })}
            type="text"
            placeholder="Bachelor of Science"
            id="degree"
            label="Degree"
            isInvalid={errors.name}
          />
          <Input
            {...register('major', { required: true })}
            type="text"
            placeholder="Computer Science"
            id="major"
            label="Major"
            isInvalid={errors.name}
          />
          <Input
            {...register('gpa', { required: false })}
            type="number"
            placeholder="4.0"
            id="gpa"
            label="GPA"
            isInvalid={errors.name}
          />
          <Input
            {...register('startDate', { required: true })}
            type="date"
            id="startDate"
            name="startDate"
            label="Start Date"
            pattern="\d{4}-\d{2}-\d{2}"
            isInvalid={errors.name}
          />
          <Input
            {...register('endDate', { required: true })}
            type="date"
            id="endDate"
            name="endDate"
            label="End Date"
            pattern="\d{4}-\d{2}-\d{2}"
            isInvalid={errors.name}
          />
          {/* <button onClick={onSubmit}>Click</button> */}
          {/* <button type="submit" value="Submit">
          Submit
        </button>
        {loading ? 'Loading' : 'Added'} */}
        </Form>
      </form>
    </>
  )
}

const Education = ({ educationData, userId }) => {
  // const [formIsDisplayed, setFormIsDisplayed] = useState(false)
  // const handleAddSchool = () => {
  //   console.log('hi')
  //   setFormIsDisplayed(true)
  //   console.log(formIsDisplayed)
  // }
  console.log(userId)

  return (
    <StyledEducationContainer>
      <StyledEducationContent>
        <h2>Education</h2>
        <StyledEducationGrid>
          <EducationData educationData={educationData} />
        </StyledEducationGrid>
      </StyledEducationContent>
      {/* <Form inputFields={FormInputFields()} buttonText={'Add Education'}> */}
      <FormInputFields userId={userId} />
      {/* </Form> */}
    </StyledEducationContainer>
  )
}

export default Education
