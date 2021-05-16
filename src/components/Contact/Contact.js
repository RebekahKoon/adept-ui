import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import {
  StyledContactContainer,
  StyledContactContent,
  StyledContact,
  StyledContactText,
} from './ContactStyle'
import StyledEducationContainer from '../Education/EducationStyle'

const Contact = ({ name, email, city, state, border }) => {
  return (
    <StyledContactContainer
    // style={{ border: border === false ? 'none' : '1px solid #F2F2F2' }}
    >
      <StyledContactContent>
        <StyledContact>
          <i className="fas fa-user-circle fa-3x"></i>
          <StyledContactText>
            <b>{name}</b>
            {email}
            <br />
            {city}, {state}
          </StyledContactText>
        </StyledContact>
      </StyledContactContent>
    </StyledContactContainer>
  )
}

export default Contact
