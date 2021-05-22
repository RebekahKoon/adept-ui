import styled from 'styled-components'

export const StyledSearchHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 18rem;
  background: var(--purple);

  h1 {
    color: var(--white);
    font-size: 3rem;
    line-height: 0;
  }
`

export const StyledSearchContainer = styled.div`
  width: 100%;
  top: 2rem;
  max-width: var(--maxWidth);
  position: relative;
  justify-content: center;
  text-align: left;
  margin: 0 auto;
`

export const StyledSearchBar = styled.div`
  display: flex;
  background-color: var(--white);
  border: solid 1px var(--lightGray);
  border-radius: 5px;
  height: 3.45rem;

  input {
    border: none;
  }
  button {
    width: 5%;
    margin: auto;
    height: 3.25rem;
    font-size: 1.5rem;
    color: var(--lightPurple);
    background-color: var(--white);
    border: none;
    border-radius: 0px 5px 5px 0px;
    line-height: 3.5rem;
    padding: 0 1rem;
    :hover {
      cursor: pointer;
      color: var(--darkPurple);
    }
  }
`

export const StyledInput = styled.input`
  font-size: 1rem;
  background-color: var(--white);
  border: solid 1px var(--lightGray);
  color: var(--darkerPurple);
  padding: 1.65rem 1.65rem 1.65rem 1.3rem;
  width: 100%;
  box-sizing: border-box;
  ::placeholder {
    color: var(--lightPurple);
  }
  &:focus {
    outline: none;
  }
  :invalid {
    box-shadow: none;
  }
`

export const StyledDropdown = {
  option: (provided) => ({
    ...provided,
    color: '#191C3C',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#EEF2FF',
    },
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: '5px 0px 0px 5px',
    color: '#191C3C',
    boxShadow: 'none',
    border: '0px',
    width: '15rem',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#AEB7D0',
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: '#311C87',
    transition: 'all .25s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),
  menu: (base) => ({
    ...base,
    top: '3rem',
  }),
  container: (base) => ({
    ...base,
    flex: 1,
  }),
}

export const StyledSearchDivider = styled.div`
  position: relative;
  justify-content: center;
  background-color: var(--white);
  width: 0px;
  height: 2rem;
  top: 0.8rem;
  border: 1px solid var(--lightPurple);
`

export default StyledSearchHeader
