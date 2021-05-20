import { useState, useContext } from 'react'
import Modal from 'react-modal'
import ModalContext from '../../context/ModalContext'
import ContactsModalStyle from './ContactsModalStyle'
import Contact from '../Contact'
import {
  StyledContactsSearch,
  StyledContactsInput,
  StyledContactsGrid,
} from './ContactsModalStyle'

const UserContacts = ({ contacts, userId, setUserContacts }) => {
  return contacts
    ? contacts.map((contact) => (
        <Contact
          name={contact.name}
          email={contact.email}
          city={contact.city}
          state={contact.state}
          contactId={contact.userId}
          userId={userId}
          setUserContacts={setUserContacts}
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

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={ContactsModalStyle}
      ariaHideApp={false}
      closeTimeoutMS={100}
    >
      <StyledContactsSearch>
        <StyledContactsInput
          type="text"
          placeholder="Search Contacts"
          // value={searchItem}
          // onChange={handleChange}
        />
        <button disabled>
          <i className="fa fa-search"></i>
        </button>
      </StyledContactsSearch>
      <h1>
        {numberContacts} Contact{numberContacts === 1 ? 's' : ''}
      </h1>
      <StyledContactsGrid>
        <UserContacts
          contacts={contacts}
          userId={userId}
          setUserContacts={setUserContacts}
        />
      </StyledContactsGrid>
      <br />
    </Modal>
  )
}

export default ContactsModal
