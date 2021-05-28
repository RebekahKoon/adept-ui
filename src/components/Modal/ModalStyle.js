import styled from 'styled-components'
import { StyledSearchBar, StyledInput } from '../SearchBar/SearchBarStyle'
import StyledSideBar from '../SideBar'

export const contactsModalStyle = {
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

export const StyledGrid = styled.div`
  margin: 0 auto;
  display: inline-grid;
  text-align: left;
  grid-template-columns: repeat(3, minmax(50px, 600px));
  gap: 0.5rem 0.5rem;
  line-height: 1.25em;
`

export const StyledBody = styled(StyledSideBar)`
  width: 100%;
  border: none;
  box-shadow: none;
  padding: 0;
  margin: none;
`

// export const StyledBody = styled.div`
//   margin: 0 auto;
//   display: inline-grid;
//   text-align: left;
//   width: 50%;
//   /* grid-template-columns: repeat(3, minmax(50px, 600px)); */
//   gap: 0.5rem 0.5rem;
//   line-height: 1.25em;
// `

export const StyledContactsSearch = styled(StyledSearchBar)`
  margin-bottom: 2rem;

  button {
    padding-right: 2.5rem;
  }
`

export const StyledContactsInput = styled(StyledInput)`
  border-radius: 5px;
`

export const ExitButtonContainer = styled.div`
  margin-bottom: 4.5rem;

  .fa-times {
    color: var(--lightGray);

    :hover {
      color: var(--purple);
    }
  }
`

export const StyledExitButton = styled.button`
  float: right;
  background: none;
  border: none;
`

export default contactsModalStyle
