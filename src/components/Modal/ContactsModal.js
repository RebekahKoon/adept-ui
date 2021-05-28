import { useState, useEffect, useContext } from 'react'
import Modal from 'react-modal'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import ModalContext from '../../context/ModalContext'
import contactsModalStyle from './ModalStyle'
import Contact from '../Contact'
import {
  StyledContactsSearch,
  StyledContactsInput,
  StyledGrid,
  ExitButtonContainer,
  StyledExitButton,
} from './ModalStyle'

const UserContacts = ({
  contacts,
  userId,
  setUserContacts,
  setSearchResults,
}) => {
  return contacts
    ? contacts.map((contact) => (
        <Contact
          key={contact.userId}
          name={contact.name}
          email={contact.email}
          city={contact.city}
          state={contact.state}
          contactId={contact.userId}
          userId={userId}
          setUserContacts={setUserContacts}
          setSearchResults={setSearchResults}
        />
      ))
    : null
}

const ContactsModal = ({
  contacts,
  setUserContacts,
  userId,
  numberContacts,
}) => {
  const { isOpen, closeModal } = useContext(ModalContext)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const results = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={contactsModalStyle}
      ariaHideApp={false}
      closeTimeoutMS={100}
    >
      <ExitButtonContainer>
        <StyledExitButton onClick={closeModal}>
          <i className="fas fa-times fa-2x"></i>
        </StyledExitButton>
      </ExitButtonContainer>
      <StyledContactsSearch>
        <StyledContactsInput
          type="text"
          placeholder="Search Contacts"
          value={searchTerm}
          onChange={handleChange}
        />
        <button disabled>
          <i className="fa fa-search"></i>
        </button>
      </StyledContactsSearch>
      <h2>
        {numberContacts} Contact{numberContacts === 1 ? '' : 's'}
      </h2>
      <StyledGrid>
        <UserContacts
          contacts={searchResults}
          userId={userId}
          setUserContacts={setUserContacts}
          setSearchResults={setSearchResults}
        />
      </StyledGrid>
      <br />
    </Modal>
  )
}

export default ContactsModal
