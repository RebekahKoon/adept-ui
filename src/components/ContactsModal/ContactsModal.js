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

const UserContacts = ({ contacts }) => {
  return contacts
    ? contacts.map((contact) => (
        <Contact
          name={contact.name}
          email={contact.email}
          city={contact.city}
          state={contact.state}
        />
      ))
    : null
}

const ContactsModal = ({ contacts, numberContacts }) => {
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
      <h1>{numberContacts} Contacts</h1>
      <StyledContactsGrid>
        <UserContacts contacts={contacts} />
        {/* {contacts}
        {contacts}
        {contacts}
        {contacts}
        {contacts}
        {contacts} */}
      </StyledContactsGrid>
      <br />
    </Modal>
  )
}

export default ContactsModal
