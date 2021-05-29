import { useContext } from 'react'
import Modal from 'react-modal'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import ModalContext from '../../context/ModalContext'
import { ExitButtonContainer, StyledExitButton } from './ModalStyle'
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
    width: '85vw',
    maxHeight: '40vw',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: '2',
  },
}

const StatisticsModal = ({ skillCount, length, type }) => {
  const { isOpen, closeModal } = useContext(ModalContext)

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
      <h2>Skill Frequency on Your {type}</h2>
      <SkillBarChart skillCount={skillCount} length={length} type={type} />
      <br />
    </Modal>
  )
}

export default StatisticsModal
