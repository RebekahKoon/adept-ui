import styled from 'styled-components'

const StyledSearchResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const SSRSearchResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 68%;
`

export const SSRMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
`

export const SSRMainContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`

export const SSRSearchResultsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4rem;
`

export const SSRSortByDropdown = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 1rem;
`

export const SSRFilterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  width: 100%;
`

export const SSRFilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
`

export const SSRFilterOptionHeader = styled.div`
  font-weight: bold;
  padding-bottom: 0.5rem;
`

export const SSRDividerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  margin-bottom: 1rem;
`

export const SSRDivider = styled.div`
  border: 1px solid #d2d0c9;
`

export const SSRCheckBoxOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: black;
  height: 100%;

  label {
  }
`

export const SkillDropdownContainer = styled.div`
  width: 12rem;
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
    width: '6.25rem',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#000000',
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

export const SSRMainContentFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
`

export const SSRFooterPagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px;
`

export const SSRFooterPrev = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 19px;

  font-size: 1rem;

  :hover {
    cursor: pointer;
    color: var(--darkPurple);
  }
`

export const SSRFooterPageNumber = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 19px;
`

export const SSRFooterNext = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 19px;

  font-size: 1rem;

  :hover {
    cursor: pointer;
    color: var(--darkPurple);
  }
`

export default StyledSearchResults
