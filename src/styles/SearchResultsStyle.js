import styled from 'styled-components'

const StyledSearchResults = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 0px 128px;

  position: static;
  width: var(--maxWidth);
  height: 1357px;
  left: 0px;
  top: 298.5px;
`

export const SearchResultsParent = styled.div``

export const SSRSearchResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 718px;
  height: 964px;
  left: 390px;
  top: 16.5px;
`

export const SSRMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px;

  position: static;
  width: 1140px;
  height: 1189px;
  left: 150px;
  top: 40px;
  margin-left: 57rem;
`

export const SSRMainContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16.5px 0px;

  position: static;
  width: 1108px;
  height: 997px;
  left: 16px;
  top: 44px;
`

export const SSRSearchResultsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  position: static;
  width: 1095px;
  height: 28px;
`

export const SSRSortByDropdown = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: static;
  width: 131px;
  height: 22px;
  max-width: var(--maxWidth);
  margin-right: 11.25%;
`

export const SSRFilterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 200px;
  height: 191px;
`

export const SSRFilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: static;
  width: 200px;
  height: 160px;
  left: 0px;
  top: 31px;
`

export const SSRFilterOptionHeader = styled.div`
  font-weight: bold;
`

export const SSRDividerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0px;

  position: static;
  width: 270px;
  height: 40px;
  left: 40px;
  top: 462px;
`

export const SSRDivider = styled.div`
  position: static;
  width: 190px;
  height: 0px;
  left: 0px;
  top: 20px;

  border: 1px solid #d2d0c9;
`

export const SSRCheckBoxOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  color: black;
  height: 100%;

  label {
    margin-top: 1.5rem;
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

export default StyledSearchResults
