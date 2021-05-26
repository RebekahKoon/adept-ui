import { useState, useEffect, useContext } from 'react'
import Modal from 'react-modal'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import ModalContext from '../../context/ModalContext'
import { StyledBody, ExitButtonContainer, StyledExitButton } from './ModalStyle'
import { RadioInput } from '../Input'
import SkillBarChart from '../BarChart'

const statisticsModalStyle = {
  modal: {},
  content: {
    padding: '3.6rem',
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    marginBottom: '2.5rem',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5px',
    border: 'none',
    boxShadow: '0px 20px 20px -20px rgba(0,0,0,1)',
    width: '70vw',
    maxHeight: '40vw',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: '2',
  },
}

const StatisticsModal = () => {
  const { isOpen, closeModal } = useContext(ModalContext)

  const handleInputChange = () => {
    console.log('hi')
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={statisticsModalStyle}
      ariaHideApp={false}
      closeTimeoutMS={100}
    >
      <ExitButtonContainer>
        <StyledExitButton onClick={closeModal}>
          <i className="fas fa-times fa-2x"></i>
        </StyledExitButton>
      </ExitButtonContainer>
      <h2>Skill Statistics</h2>
      {/* <StyledBody> */}
      <SkillBarChart />
      {/* <h4 style={{ lineHeight: '0rem' }}>Docker</h4>
        Appeared in 25% of your applications
        <RadioInput
          // {...register('city', { required: false })}
          type="checkbox"
          placeholder="Compenent?"
          id="isCompetent"
          // isInvalid={errors.city}
          label="Are you comfortable with this skill?"
          noPadding={true}
          onChange={handleInputChange}
        />
        <hr></hr>
        <h4 style={{ lineHeight: '0rem' }}>Communication</h4>
        Appeared in 100% of your applications
        <RadioInput
          // {...register('city', { required: false })}
          type="checkbox"
          placeholder="Compenent?"
          id="isCompetent"
          // isInvalid={errors.city}
          label="Are you comfortable with this skill?"
          noPadding={true}
          onChange={handleInputChange}
        />
        <hr></hr>
        <h4 style={{ lineHeight: '0rem' }}>React</h4>
        Appeared in 50% of your applications
        <RadioInput
          // {...register('city', { required: false })}
          type="checkbox"
          placeholder="Compenent?"
          id="isCompetent"
          // isInvalid={errors.city}
          label="Are you comfortable with this skill?"
          noPadding={true}
          onChange={handleInputChange}
        /> */}
      {/* </StyledBody> */}
      <br />
    </Modal>
  )
}

export default StatisticsModal
