import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import {
  StyledContactContainer,
  StyledContactContent,
  StyledContact,
  StyledContactText,
} from '../Contact/ContactStyle'

const Applicant = ({ applicant }) => {
  const { name, email, city, state } = applicant

  return (
    <StyledContactContainer>
      <StyledContactContent>
        <StyledContact>
          <i className="fas fa-user-circle fa-3x"></i>
          <StyledContactText>
            <b>{name}</b>
            {email}
            <br />
            {city ? `${city},` : 'Location not specified'} {state ? state : ''}
          </StyledContactText>
        </StyledContact>
      </StyledContactContent>
    </StyledContactContainer>
  )
}

export default Applicant
