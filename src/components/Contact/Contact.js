import { useMutation } from '@apollo/client'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import { REMOVE_CONTACT_FROM_USER } from '../../queries/removeContactFromUser'
import {
  StyledContactContainer,
  StyledContactContent,
  StyledContact,
  StyledContactText,
  StyledRemoveContactButton,
} from './ContactStyle'

const Contact = ({
  name,
  email,
  city,
  state,
  contactId,
  userId,
  setUserContacts,
}) => {
  const [removeContactFromUser, { loading, error }] = useMutation(
    REMOVE_CONTACT_FROM_USER,
    {
      onCompleted({ removeContactFromUser }) {
        console.log(removeContactFromUser)
        setUserContacts(removeContactFromUser.contacts)
      },
      onError(e) {
        console.log(e)
      },
    }
  )

  const handleRemoveContactFromUser = (userId, contactId) => {
    console.log(userId, contactId)
    removeContactFromUser({
      variables: { userId: userId, contactId: contactId },
    })
  }

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
          <StyledRemoveContactButton
            onClick={() => handleRemoveContactFromUser(userId, contactId)}
          >
            <i className="fas fa-times"></i>
          </StyledRemoveContactButton>
        </StyledContact>
      </StyledContactContent>
    </StyledContactContainer>
  )
}

export default Contact
