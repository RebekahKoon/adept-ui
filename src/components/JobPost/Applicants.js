import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  StyledContactContainer,
  StyledContactContent,
  StyledContact,
  StyledContactText,
} from '../Contact/ContactStyle'
import { ApplicantsContainer } from '../../styles/JobPosting'

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

// applicants is an array of JobApplications that has a user field
const Applicants = ({ applicants = [] }) => {
  return (
    <TransitionGroup component={ApplicantsContainer}>
      <h2>Applicants</h2>
      {applicants.map((applicant) => (
        <CSSTransition
          key={applicant.user.userId}
          timeout={300}
          classNames="transition"
        >
          <Applicant applicant={applicant.user} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

export default Applicants
